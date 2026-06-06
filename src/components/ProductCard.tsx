import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Recipe } from '../data/defaultData';

interface ProductCardProps {
  code: string;
  name: string;
  recipe: Recipe;
  isProducible: boolean;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  code,
  name,
  recipe,
  isProducible,
  onClick,
}) => {
  return (
    <div
      className={`product-card ${isProducible ? 'producible' : 'missing'}`}
      onClick={onClick}
      title={`Click to view production recipe tree for ${name}`}
      id={`product-card-${code.toLowerCase()}`}
    >
      <div className="product-card-info">
        <h3 className="product-name">{name}</h3>
        <div className="product-meta">
          <span className="badge badge-class">{recipe.class}</span>
          <span>Qty: {recipe.output_qty}</span>
          {recipe.tech && <span>Tech: {recipe.tech}%</span>}
        </div>
      </div>
      
      <div className="indicator-pill">
        {isProducible ? (
          <CheckCircle2 size={20} strokeWidth={2.5} />
        ) : (
          <XCircle size={20} strokeWidth={2} />
        )}
      </div>
    </div>
  );
};
