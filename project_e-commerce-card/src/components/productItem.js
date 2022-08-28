import React from "react";
import { useSelector } from "react-redux";

const ProductItem = () => {
  const products = useSelector((state) => state.allProducts.products);
  return (
    <div>
      {/* cards  start*/}
      <div className="d-flex justify-content-center flex-wrap">
        {products.map((product) => (
          <div
            key={product.id}
            className="card m-2 p-2"
            style={{ width: "18rem" }}
          >
            <img
              src={product.image}
              className="card-img-top"
              style={{ height: "18rem" }}
              alt="..."
            />
            <div className="card-body d-flex justify-content-center h-25">
              <div className="align-self-end">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-secondary">Detail </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* cards  ends*/}
    </div>
  );
};

export default ProductItem;
