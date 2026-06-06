import React, { useState, useEffect, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { ProductGrid } from './components/ProductGrid';
import { DetailView } from './components/DetailView';
import { DEFAULT_ITEMS, DEFAULT_RECIPES, ItemInfo, Recipe } from './data/defaultData';
import { canProduce, getRawMaterials } from './utils/calculator';
import { parseCSV } from './utils/csvParser';
import { Upload, X } from 'lucide-react';

export const App: React.FC = () => {
  // Application Data States (allows overriding with custom mods)
  const [items, setItems] = useState<ItemInfo[]>(DEFAULT_ITEMS);
  const [recipes, setRecipes] = useState<Record<string, Recipe>>(DEFAULT_RECIPES);

  // UI State
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Filter and view states to persist when viewing details
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewFilter, setViewFilter] = useState<'All' | 'Producible'>('All');
  
  // File upload staging states
  const [itemFile, setItemFile] = useState<{ name: string; content: string } | null>(null);
  const [mfgFile, setMfgFile] = useState<{ name: string; content: string } | null>(null);

  // Active Available Resources State
  const [availableResources, setAvailableResources] = useState<Set<string>>(new Set());

  // Derive raw materials dynamically
  const rawMaterialCodes = useMemo(() => {
    return getRawMaterials(items, recipes);
  }, [items, recipes]);


  const nameToCodeMap = useMemo(() => {
    const map: Record<string, string> = {};
    items.forEach((item) => {
      map[item.name.toUpperCase().trim()] = item.code;
    });
    return map;
  }, [items]);

  // 1. Initial Load: Read resource config from localStorage or fallback to defaults
  useEffect(() => {
    const stored = localStorage.getItem('cap2_manufacturing_resources');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as string[];
        setAvailableResources(new Set(parsed));
        return;
      } catch (e) {
        console.error('Failed to parse stored resources', e);
      }
    }

    // Default Fallback: raw materials + common presets
    const defaultAvailable = new Set<string>();
    // Load default raw materials
    rawMaterialCodes.forEach(code => defaultAvailable.add(code));
    
    // Add common seaport presets if they exist in items
    const presets = ["CITRIC ACID", "COCONUT OIL", "GOLD", "OIL", "PAPER", "COAL", "LINEN", "DYESTUFF", "COTTON"];
    presets.forEach(name => {
      const code = nameToCodeMap[name];
      if (code) defaultAvailable.add(code);
    });
    
    setAvailableResources(defaultAvailable);
  }, [rawMaterialCodes, nameToCodeMap]);

  // 2. Producibility Calculation Engine
  const producibleProducts = useMemo(() => {
    const producible = new Set<string>();
    const memo = new Map<string, boolean>();

    Object.keys(recipes).forEach((product) => {
      if (canProduce(product, availableResources, recipes, memo, new Set())) {
        producible.add(product);
      }
    });

    return producible;
  }, [availableResources, recipes]);

  // Resource toggle handler
  const handleToggleResource = (code: string) => {
    setAvailableResources((prev) => {
      const next = new Set(prev);
      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }
      return next;
    });
  };

  // Select all base raw materials (uncheck others)
  const handleSelectAllRaw = () => {
    const next = new Set<string>();
    rawMaterialCodes.forEach((code) => next.add(code));
    setAvailableResources(next);
  };

  // Clear all selections
  const handleClearAll = () => {
    setAvailableResources(new Set());
  };

  // Reset to default resources
  const handleResetDefaults = () => {
    localStorage.removeItem('cap2_manufacturing_resources');
    const next = new Set<string>();
    rawMaterialCodes.forEach((code) => next.add(code));
    // Re-apply presets
    const presets = ["CITRIC ACID", "COCONUT OIL", "GOLD", "OIL", "PAPER", "COAL", "LINEN", "DYESTUFF", "COTTON"];
    presets.forEach(name => {
      const code = nameToCodeMap[name];
      if (code) next.add(code);
    });
    setAvailableResources(next);
  };

  // Save current active list to LocalStorage
  const handleSaveResources = () => {
    const list = Array.from(availableResources);
    localStorage.setItem('cap2_manufacturing_resources', JSON.stringify(list));
    alert('Active resource settings successfully saved to browser local storage!');
  };

  // File Upload Handlers for custom mods
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'items' | 'mfg') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      if (type === 'items') {
        setItemFile({ name: file.name, content: text });
      } else {
        setMfgFile({ name: file.name, content: text });
      }
    };
    reader.readAsText(file);
  };

  // Apply custom uploaded mod data
  const handleApplyCustomData = () => {
    if (!itemFile || !mfgFile) {
      setUploadError('Please select both ItemInfo.csv and Manufacturing.csv files.');
      return;
    }

    try {
      // Parse ItemInfo
      const parsedItems = parseCSV(itemFile.content);
      if (parsedItems.length === 0 || !('CODE' in parsedItems[0]) || !('NAME' in parsedItems[0])) {
        throw new Error('Invalid ItemInfo.csv layout. Ensure columns CODE, NAME and CLASS exist.');
      }

      const formattedItems: ItemInfo[] = parsedItems.map(row => ({
        code: String(row.CODE).toUpperCase().trim(),
        name: String(row.NAME).trim(),
        class: String(row.CLASS || 'RAW').toUpperCase().trim()
      }));

      // Parse Manufacturing
      const parsedMfg = parseCSV(mfgFile.content);
      if (parsedMfg.length === 0 || !('OUTPUT' in parsedMfg[0])) {
        throw new Error('Invalid Manufacturing.csv layout. Ensure OUTPUT and INPUT columns exist.');
      }

      const formattedRecipes: Record<string, Recipe> = {};
      parsedMfg.forEach(row => {
        const product = String(row.OUTPUT).toUpperCase().trim();
        
        const inputs = [];
        for (let i = 1; i <= 3; i++) {
          const inpCol = `INPUT${i}`;
          const qtyCol = `IQTY${i}`;
          const quaCol = `IQUA${i}`;
          
          if (row[inpCol] && String(row[inpCol]).trim()) {
            inputs.push({
              code: String(row[inpCol]).toUpperCase().trim(),
              qty: parseFloat(row[qtyCol]) || 0.0,
              quality: parseFloat(row[quaCol]) || 0.0
            });
          }
        }

        const techVal = row.TECHPERCENT && String(row.TECHPERCENT).trim() !== '' ? parseInt(row.TECHPERCENT) : null;

        formattedRecipes[product] = {
          class: String(row.CLASS || 'GENERAL').toUpperCase().trim(),
          output_qty: parseFloat(row.OQTY) || 1.0,
          prod_speed: parseFloat(row.PROD_SPEED) || 100.0,
          machine: parseInt(row.MACHINEGFX) || 1,
          tech: isNaN(Number(techVal)) ? null : techVal,
          inputs: inputs
        };
      });

      // Update state
      setItems(formattedItems);
      setRecipes(formattedRecipes);
      setIsUploadModalOpen(false);
      setSelectedProduct(null);
      setUploadError(null);
      setSearchTerm('');
      setSelectedCategory('All');
      setViewFilter('All');
      alert('Custom game mod loaded successfully!');
    } catch (e: any) {
      setUploadError(e.message || 'Failed to parse CSV files. Please check formatting.');
    }
  };

  // Reset to game default values
  const handleResetToDefaultsData = () => {
    setItems(DEFAULT_ITEMS);
    setRecipes(DEFAULT_RECIPES);
    setItemFile(null);
    setMfgFile(null);
    setUploadError(null);
    setIsUploadModalOpen(false);
    setSelectedProduct(null);
    setSearchTerm('');
    setSelectedCategory('All');
    setViewFilter('All');
    alert('Reset back to default Capitalism 2 data successfully.');
  };

  return (
    <div className="app-container">
      <Sidebar
        items={items}
        rawMaterialCodes={rawMaterialCodes}
        availableResources={availableResources}
        onToggleResource={handleToggleResource}
        onSelectAllRaw={handleSelectAllRaw}
        onClearAll={handleClearAll}
        onResetDefaults={handleResetDefaults}
        onSaveResources={handleSaveResources}
        onOpenUploadModal={() => setIsUploadModalOpen(true)}
      />

      <main style={{ flex: 1, height: '100%', overflow: 'hidden' }}>
        {selectedProduct ? (
          <DetailView
            productCode={selectedProduct}
            items={items}
            recipes={recipes}
            availableResources={availableResources}
            onBack={() => setSelectedProduct(null)}
            onSelectProduct={setSelectedProduct}
          />
        ) : (
          <ProductGrid
            items={items}
            recipes={recipes}
            producibleProducts={producibleProducts}
            onSelectProduct={setSelectedProduct}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            viewFilter={viewFilter}
            setViewFilter={setViewFilter}
          />
        )}
      </main>

      {/* Custom Data Upload Modal */}
      {isUploadModalOpen && (
        <div className="modal-overlay" id="upload-modal-container">
          <div className="modal-content">
            <div className="flex-between modal-header">
              <h3>Load Custom Capitalism 2 Mods</h3>
              <button 
                onClick={() => setIsUploadModalOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                id="btn-close-modal"
              >
                <X size={20} />
              </button>
            </div>

            <p className="summary-text" style={{ margin: 0 }}>
              Playing a custom mod or script? Select your modified databases to parse them directly in-browser.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px', background: 'var(--bg-app)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <span className="resource-label" style={{ fontWeight: 600, fontSize: '0.85rem' }}>Reference CSV Templates</span>
              <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem' }}>
                <a href="./ItemInfo.csv" download="ItemInfo.csv" style={{ color: 'var(--color-blue)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }} className="template-download-link">
                  📥 Download ItemInfo.csv
                </a>
                <a href="./Manufacturing.csv" download="Manufacturing.csv" style={{ color: 'var(--color-blue)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }} className="template-download-link">
                  📥 Download Manufacturing.csv
                </a>
              </div>
            </div>

            <div className="spec-group">
              {/* ItemInfo Upload */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label className="resource-label" style={{ fontWeight: 600 }}>ItemInfo.csv</label>
                <div className="upload-box" onClick={() => document.getElementById('item-input')?.click()}>
                  <Upload size={24} className="icon-blue" />
                  <span className="upload-text">Click to select ItemInfo.csv</span>
                  {itemFile && <span className="upload-filename">✓ {itemFile.name}</span>}
                  <input
                    type="file"
                    id="item-input"
                    accept=".csv"
                    style={{ display: 'none' }}
                    onChange={(e) => handleFileChange(e, 'items')}
                  />
                </div>
              </div>

              {/* Manufacturing Upload */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label className="resource-label" style={{ fontWeight: 600 }}>Manufacturing.csv</label>
                <div className="upload-box" onClick={() => document.getElementById('mfg-input')?.click()}>
                  <Upload size={24} className="icon-blue" />
                  <span className="upload-text">Click to select Manufacturing.csv</span>
                  {mfgFile && <span className="upload-filename">✓ {mfgFile.name}</span>}
                  <input
                    type="file"
                    id="mfg-input"
                    accept=".csv"
                    style={{ display: 'none' }}
                    onChange={(e) => handleFileChange(e, 'mfg')}
                  />
                </div>
              </div>
            </div>

            {uploadError && (
              <div style={{ color: 'var(--color-rose)', fontSize: '0.85rem', fontWeight: 500 }}>
                {uploadError}
              </div>
            )}

            <div className="button-grid" style={{ marginTop: '10px' }}>
              <button
                onClick={handleResetToDefaultsData}
                className="btn btn-secondary"
                id="btn-modal-restore-defaults"
              >
                Restore Defaults
              </button>
              <button
                onClick={handleApplyCustomData}
                className="btn btn-primary"
                id="btn-modal-apply-custom"
              >
                Apply Data
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
