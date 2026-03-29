"use client";

import { useState } from "react";
import Filters from "./Filters";
import ProductCard from "./ProductCard";

export default function ProductSection({ products }) {
  const [selected, setSelected] = useState("all");

  const filteredProducts =
    selected === "all"
      ? products
      : products.filter((p) => p.category === selected);

  return (
    <div className="layout">
      <Filters selected={selected} setSelected={setSelected} />

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}