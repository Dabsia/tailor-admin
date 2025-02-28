import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

const AllProducts = () => {
  const allProducts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div>
      <h1 className="mb-4 font-bold text-[24px]"> All Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {allProducts?.map((product, id) => {
          return <ProductCard key={id} />;
        })}
      </div>
    </div>
  );
};

export default AllProducts;
