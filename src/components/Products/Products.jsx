import React from "react";
import object from "./data";
import "./product.css";

const Products = () => {
  const product = object.map((dataObj) => {
    const { name, url, price } = dataObj;
    return (
      <div className="product">
        <h3>{name}</h3>
        <img width={200} src={url} alt="image" />
        <p>{price}</p>
        <button id="buy">Buy Now</button>
      </div>
    );
  });
  return (
    <>
    <div className="box1">
      <h1>Products</h1>
      <div className="box2">{product}</div>
    </div>
    </>
  );
};

export default Products;
