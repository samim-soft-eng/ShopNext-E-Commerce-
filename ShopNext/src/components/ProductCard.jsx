import React from "react";


function ProductCard({ product }) {

  return (
    <div className="product-card">

      <img src={product.image} alt={product.title} className="product-image"/>

      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="category">{product.category}</p>
        <p className="rating">⭐ {product.rating.rate} ({product.rating.count})</p>

        <button> Add to Cart </button>

      </div>

    </div>
  );
}

export default ProductCard;