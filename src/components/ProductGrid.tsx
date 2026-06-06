import React, { useMemo } from 'react';
import { Search } from 'lucide-react';
import { ItemInfo, Recipe } from '../data/defaultData';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  items: ItemInfo[];
  recipes: Record<string, Recipe>;
  producibleProducts: Set<string>;
  onSelectProduct: (code: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  viewFilter: 'All' | 'Producible';
  setViewFilter: (filter: 'All' | 'Producible') => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  items,
  recipes,
  producibleProducts,
  onSelectProduct,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  viewFilter,
  setViewFilter,
}) => {

  // Find all manufactured products (items that have a recipe)
  const manufacturedItems = useMemo(() => {
    const recipeOutputs = new Set(Object.keys(recipes));
    return items.filter((item) => recipeOutputs.has(item.code));
  }, [items, recipes]);

  // Extract unique categories for filter
  const categories = useMemo(() => {
    const classes = new Set<string>();
    Object.values(recipes).forEach((r) => {
      if (r.class) classes.add(r.class);
    });
    return ['All', ...Array.from(classes).sort()];
  }, [recipes]);

  // Filter products based on search, category, and producibility status
  const filteredProducts = useMemo(() => {
    return manufacturedItems
      .filter((item) => {
        const matchesSearch =
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.code.toLowerCase().includes(searchTerm.toLowerCase());
        
        const recipe = recipes[item.code];
        const matchesCategory =
          selectedCategory === 'All' || (recipe && recipe.class === selectedCategory);
          
        const isProducible = producibleProducts.has(item.code);
        const matchesView = viewFilter === 'All' || (viewFilter === 'Producible' && isProducible);
        
        return matchesSearch && matchesCategory && matchesView;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [manufacturedItems, searchTerm, selectedCategory, viewFilter, recipes, producibleProducts]);

  // Calculate totals for summary header
  const summaryText = useMemo(() => {
    const totalCount = filteredProducts.length;
    const producibleCount = filteredProducts.filter((item) =>
      producibleProducts.has(item.code)
    ).length;
    const missingCount = totalCount - producibleCount;
    
    return `Showing ${totalCount} products (${producibleCount} producible, ${missingCount} missing)`;
  }, [filteredProducts, producibleProducts]);

  return (
    <div className="content-area" id="product-browser-container">
      <div className="top-bar">
        <h1 className="bar-title">Manufactured Products</h1>
        
        <div className="filters-wrapper">
          <div className="search-wrapper" style={{ width: '220px' }}>
            <Search size={16} className="search-icon" />
            <input
              type="text"
              className="input-search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              id="product-search-input"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="select-custom"
            title="Filter products by class category"
            id="category-filter-select"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'All' ? 'All Categories' : cat}
              </option>
            ))}
          </select>

          <select
            value={viewFilter}
            onChange={(e) => setViewFilter(e.target.value as 'All' | 'Producible')}
            className="select-custom"
            title="Filter by manufacturing possibility status"
            id="status-filter-select"
          >
            <option value="All">All Products</option>
            <option value="Producible">Producible Only</option>
          </select>
        </div>
      </div>

      <div className="products-container" id="product-grid-scrollable">
        <div className="summary-text" id="product-summary-label">{summaryText}</div>
        
        <div className="product-grid">
          {filteredProducts.map((item) => (
            <ProductCard
              key={item.code}
              code={item.code}
              name={item.name}
              recipe={recipes[item.code]}
              isProducible={producibleProducts.has(item.code)}
              onClick={() => onSelectProduct(item.code)}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="summary-text" style={{ textAlign: 'center', marginTop: '60px', fontSize: '1.1rem' }}>
            No products match your active filters. Try clearing search text or adding more raw materials in the sidebar.
          </div>
        )}
      </div>
    </div>
  );
};
