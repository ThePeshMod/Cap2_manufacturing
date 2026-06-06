import React, { useEffect } from 'react';
import { ArrowLeft, Check, AlertTriangle, AlertOctagon, HelpCircle } from 'lucide-react';
import { Recipe, ItemInfo } from '../data/defaultData';
import { buildRecipeTree, TreeItem } from '../utils/calculator';

interface DetailViewProps {
  productCode: string;
  items: ItemInfo[];
  recipes: Record<string, Recipe>;
  availableResources: Set<string>;
  onBack: () => void;
  onSelectProduct: (code: string) => void;
}

export const DetailView: React.FC<DetailViewProps> = ({
  productCode,
  items,
  recipes,
  availableResources,
  onBack,
  onSelectProduct,
}) => {
  // Bind Escape key to go back
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBack]);

  const itemNames = React.useMemo(() => {
    const map: Record<string, string> = {};
    items.forEach((item) => {
      map[item.code] = item.name;
    });
    return map;
  }, [items]);

  const recipe = recipes[productCode];
  const productName = itemNames[productCode] || productCode;

  // Build recipe tree
  const treeData = React.useMemo(() => {
    const memo = new Map<string, boolean>();
    return buildRecipeTree(
      productCode,
      recipe?.output_qty || 1,
      100, // root quality weight
      availableResources,
      recipes,
      itemNames,
      memo
    );
  }, [productCode, recipe, availableResources, recipes, itemNames]);

  // Recursively render tree node components
  const renderTreeNode = (node: TreeItem, isRoot = false) => {
    const hasChildren = node.children && node.children.length > 0;
    const isClickable = !isRoot && recipes[node.code] !== undefined;

    return (
      <div key={`${node.code}-${node.qtyNeeded}`} className={isRoot ? 'tree-root' : 'tree-node-wrapper'}>
        <div 
          className={`tree-node ${node.status}`}
          onClick={() => isClickable && onSelectProduct(node.code)}
          title={isClickable ? `Click to inspect recipe details for ${node.name}` : ''}
          style={{ cursor: isClickable ? 'pointer' : 'default' }}
        >
          {node.status === 'available' && <Check size={16} style={{ color: 'var(--color-emerald)' }} />}
          {node.status === 'producible' && <AlertTriangle size={16} style={{ color: 'var(--color-amber)' }} />}
          {node.status === 'missing' && <AlertOctagon size={16} style={{ color: 'var(--color-rose)' }} />}
          
          <div className="tree-node-info">
            <div>
              <span className="node-name">{node.name}</span>
              <span className="node-quantity" style={{ marginLeft: '10px' }}>
                ({node.code})
              </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {!isRoot && (
                <span className="node-quantity">
                  Req: {node.qtyNeeded} (Qual: {node.qualityNeeded}%)
                </span>
              )}
              <span className={`node-badge ${node.status}`}>
                {node.status === 'available' && '✓ Sourced'}
                {node.status === 'producible' && '⚙ Producible'}
                {node.status === 'missing' && '✗ Missing'}
              </span>
            </div>
          </div>
        </div>

        {hasChildren && node.children.map((child) => renderTreeNode(child))}
      </div>
    );
  };

  if (!recipe) {
    return (
      <div className="detail-view">
        <div className="detail-header">
          <button onClick={onBack} className="btn btn-secondary">
            <ArrowLeft size={16} /> Back to grid
          </button>
        </div>
        <div className="detail-body flex-center" style={{ flexDirection: 'column', gap: '10px' }}>
          <HelpCircle size={40} />
          <h2>Recipe Not Found</h2>
          <p className="summary-text">No manufacturing formula exists for product code {productCode}.</p>
        </div>
      </div>
    );
  }

  // Helper mapping for Machinery Graphics types
  const getMachineryName = (gfxIndex: number) => {
    const machineryMap: Record<number, string> = {
      1: 'Assembly Line (Standard MFG)',
      2: 'Heavy Duty Assembly (Auto/Machinery)',
      3: 'Chemical Reactor (Synthetics/Cosmetics)',
      4: 'Food Processing Vat (Desserts/Liquids)',
      5: 'Bottling & Canning (Beverages/Cans)',
    };
    return machineryMap[gfxIndex] || `Machine Type ${gfxIndex}`;
  };

  return (
    <div className="detail-view" id="recipe-details-view">
      <div className="detail-header">
        <div className="detail-title-wrapper">
          <h1 className="detail-title" id="detail-heading">
            {productName}
          </h1>
          <p className="summary-text" style={{ margin: 0 }}>
            Inspect full recipe dependencies and factory parameters. Press <kbd style={{ background: '#252535', padding: '2px 6px', borderRadius: '4px' }}>ESC</kbd> to return.
          </p>
        </div>
        
        <button onClick={onBack} className="btn btn-primary" id="btn-back-to-products">
          <ArrowLeft size={16} />
          Back to Products
        </button>
      </div>

      <div className="detail-body">
        <div className="tree-panel" id="production-tree-panel">
          <h2 className="panel-title">Production Tree</h2>
          <div style={{ paddingLeft: '4px' }}>
            {renderTreeNode(treeData, true)}
          </div>
        </div>

        <div className="specs-panel" id="product-specs-panel">
          <h2 className="panel-title">Factory Specifications</h2>
          
          <div className="spec-group">
            <div className="spec-row">
              <span className="spec-label">Industry Class</span>
              <span className="spec-value">{recipe.class}</span>
            </div>
            
            <div className="spec-row">
              <span className="spec-label">Output Quantity</span>
              <span className="spec-value">{recipe.output_qty} units / run</span>
            </div>
            
            <div className="spec-row">
              <span className="spec-label">Production Speed</span>
              <span className="spec-value">{recipe.prod_speed} (Standard)</span>
            </div>
            
            <div className="spec-row">
              <span className="spec-label">Required Machinery</span>
              <span className="spec-value">{getMachineryName(recipe.machine)}</span>
            </div>
            
            <div className="spec-row">
              <span className="spec-label">Technology Weight</span>
              <span className="spec-value">{recipe.tech !== null ? `${recipe.tech}%` : 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
