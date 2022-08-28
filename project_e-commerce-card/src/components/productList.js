import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "./productItem";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("All Products :", products);

  return (
    <div className="container-fluid text-center">
      <ProductItem />
    </div>
  );
};

export default ProductList;
