import React, { useState } from 'react';
import { Search, Save, RotateCcw, Trash2, ListChecks, Database, Check } from 'lucide-react';
import { ItemInfo } from '../data/defaultData';

interface SidebarProps {
  items: ItemInfo[];
  rawMaterialCodes: string[];
  availableResources: Set<string>;
  onToggleResource: (code: string) => void;
  onSelectAllRaw: () => void;
  onClearAll: () => void;
  onResetDefaults: () => void;
  onSaveResources: () => void;
  onOpenUploadModal: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  rawMaterialCodes,
  availableResources,
  onToggleResource,
  onSelectAllRaw,
  onClearAll,
  onResetDefaults,
  onSaveResources,
  onOpenUploadModal,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sort items based on name
  const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));

  // Filter items matching search term (name or code)
  const filteredItems = sortedItems.filter(
    item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="sidebar" id="sidebar-container">
      <div className="sidebar-header">
        <h2 className="sidebar-title">
          <Database size={20} />
          RESOURCES
        </h2>
        
        <div className="search-wrapper">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="input-search"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            id="resource-search-input"
          />
        </div>
      </div>

      <div className="sidebar-content" id="resource-list-scrollable">
        {filteredItems.map((item) => {
          const isActive = availableResources.has(item.code);
          const isRaw = rawMaterialCodes.includes(item.code);
          
          return (
            <div
              key={item.code}
              className={`resource-item ${isActive ? 'active' : ''}`}
              onClick={() => onToggleResource(item.code)}
              title={`${item.name} (${item.code}) - ${isRaw ? 'Raw Material' : 'Manufactured Product'}`}
            >
              <div className="checkbox-custom">
                {isActive && <Check className="checkbox-check" strokeWidth={3} />}
              </div>
              <span className="resource-label">{item.name}</span>
            </div>
          );
        })}
        {filteredItems.length === 0 && (
          <div className="summary-text" style={{ textAlign: 'center', marginTop: '20px' }}>
            No resources match your search.
          </div>
        )}
      </div>

      <div className="sidebar-footer">
        <div className="button-grid">
          <button
            onClick={onSelectAllRaw}
            className="btn btn-secondary"
            title="Select all base raw materials (items with no recipes)"
            id="btn-select-raw"
          >
            <ListChecks size={15} />
            All Raw
          </button>
          
          <button
            onClick={onClearAll}
            className="btn btn-secondary"
            title="Clear all selected resources"
            id="btn-clear-all"
          >
            <Trash2 size={15} />
            Clear All
          </button>
        </div>

        <div className="button-grid">
          <button
            onClick={onResetDefaults}
            className="btn btn-secondary"
            title="Reload saved configurations"
            id="btn-reset"
          >
            <RotateCcw size={15} />
            Reset
          </button>

          <button
            onClick={onSaveResources}
            className="btn btn-primary"
            title="Save active resource configurations to local browser storage"
            id="btn-save"
          >
            <Save size={15} />
            Save List
          </button>
        </div>

        <button
          onClick={onOpenUploadModal}
          className="btn btn-secondary"
          style={{ width: '100%', marginTop: '4px', borderStyle: 'dashed' }}
          id="btn-custom-data"
        >
          <Database size={15} />
          Load Custom Mod CSVs
        </button>
      </div>
    </aside>
  );
};
