import { Recipe } from '../data/defaultData';

/**
 * Checks if a product is producible using DFS with cycle detection and memoization.
 */
export function canProduce(
  product: string,
  available: Set<string>,
  recipes: Record<string, Recipe>,
  memo: Map<string, boolean>,
  path: Set<string>
): boolean {
  // If the resource is marked as available by the user, it is producible
  if (available.has(product)) {
    return true;
  }
  
  // If we already calculated this product's status, return it from cache
  if (memo.has(product)) {
    return memo.get(product)!;
  }
  
  // If we encounter a node already in our current DFS recursion path, we've hit a cycle
  if (path.has(product)) {
    return false;
  }
  
  // If the product does not have a recipe, it's a raw material and we don't have it
  if (!recipes[product]) {
    memo.set(product, false);
    return false;
  }
  
  // Add product to recursion path
  path.add(product);
  
  const recipe = recipes[product];
  let isProducible = true;
  
  for (const input of recipe.inputs) {
    if (!canProduce(input.code, available, recipes, memo, path)) {
      isProducible = false;
      break;
    }
  }
  
  // Remove product from recursion path and cache the result
  path.delete(product);
  memo.set(product, isProducible);
  return isProducible;
}

export interface TreeItem {
  code: string;
  name: string;
  qtyNeeded: number;
  qualityNeeded: number;
  status: 'available' | 'producible' | 'missing';
  children: TreeItem[];
}

/**
 * Recursively builds the recipe tree hierarchy for a product.
 */
export function buildRecipeTree(
  product: string,
  qtyNeeded: number,
  qualityNeeded: number,
  available: Set<string>,
  recipes: Record<string, Recipe>,
  itemNames: Record<string, string>,
  memo: Map<string, boolean>,
  path: Set<string> = new Set()
): TreeItem {
  const name = itemNames[product] || product;
  
  // Determine node status
  let status: 'available' | 'producible' | 'missing' = 'missing';
  if (available.has(product)) {
    status = 'available';
  } else if (recipes[product]) {
    // Check if recursively producible
    const canProd = canProduce(product, available, recipes, memo, new Set());
    status = canProd ? 'producible' : 'missing';
  }
  
  const children: TreeItem[] = [];
  
  // Prevent infinite loops in cycle dependencies
  if (recipes[product] && !path.has(product)) {
    path.add(product);
    const recipe = recipes[product];
    
    for (const input of recipe.inputs) {
      children.push(
        buildRecipeTree(
          input.code,
          input.qty,
          input.quality,
          available,
          recipes,
          itemNames,
          memo,
          new Set(path) // copy path to track branch-specific cycles
        )
      );
    }
  }
  
  return {
    code: product,
    name,
    qtyNeeded,
    qualityNeeded,
    status,
    children
  };
}

/**
 * Returns a list of all raw materials (items that do not have any recipe outputs).
 */
export function getRawMaterials(
  items: { code: string; name: string }[],
  recipes: Record<string, Recipe>
): string[] {
  const recipeOutputs = new Set(Object.keys(recipes));
  return items
    .filter(item => !recipeOutputs.has(item.code))
    .map(item => item.code);
}
