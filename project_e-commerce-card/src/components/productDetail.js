import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.selectedProduct);
  console.log(productId);

  const fetchSelectedProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("Err", err));
    console.log(response.data);
    dispatch(setSelectedProduct(response.data));
  };

  useEffect(() => {
    fetchSelectedProduct();
  }, []);
  console.log("redux selected product", selectedProduct);
  return <div>Product Detail</div>;
};

export default ProductDetail;
