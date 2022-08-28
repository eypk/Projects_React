import React, { useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.selectedProduct.product);

  const fetchSelectedProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("Err", err));
    // console.log("response data", response.data);
    dispatch(setSelectedProduct(response.data));
  };

  useEffect(() => {
    fetchSelectedProduct();
  }, []);

  console.log("Selected Product", selectedProduct);

  return (
    <div className="d-flex justify-content-center flex-wrap m-auto w-50">
      <div key={selectedProduct.id} className="card p-5">
        <img
          src={selectedProduct.image}
          className="card-img-top"
          alt={selectedProduct.title}
        />
        <div className="card-body d-flex justify-content-center h-25">
          <div className="align-self-end">
            <h4 className="card-title">{selectedProduct.title}</h4>
            <h5 className="card-text">Price ${selectedProduct.price}</h5>
            <h6 className="card-text">Category: {selectedProduct.category}</h6>
            <p className="card-text">
              Description:
              {/* <span className="fst-italic"> {selectedProduct.description}</span> */}
            </p>
            <div className="d-flex justify-content-around">
              <p>
                Rate:
                <span className="badge bg-secondary ms-2">
                  {selectedProduct.rating?.rate}
                </span>
              </p>
              <p>
                Count:
                <span className="badge bg-secondary ms-2">
                  {selectedProduct.rating?.count}
                </span>
              </p>
            </div>
            <Link to={"/"}>
              <button className="btn btn-danger">Back </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
