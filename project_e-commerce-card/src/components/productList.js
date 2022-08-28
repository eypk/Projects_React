import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./productItem";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  return (
    <div className="container">
      <ProductItem />
    </div>
  );
};

export default ProductList;
