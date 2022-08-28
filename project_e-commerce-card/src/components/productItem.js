import React from "react";
import { useSelector } from "react-redux";

const ProductItem = () => {
  const products = useSelector((state) => state.allProducts.products);
  const { id, title, content } = products[0];
  return (
    <div>
      {/* cards  start*/}
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="card_picture" />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{content}</p>
          <button className="btn btn-secondary">Details</button>
        </div>
      </div>
      {/* cards  ends*/}
    </div>
  );
};

export default ProductItem;
