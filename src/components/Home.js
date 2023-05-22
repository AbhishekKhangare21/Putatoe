import React from "react";
import "./Home.css";
import X0R1DJI from "../assets/X0R1DJI.png";
import CBCXNEB from "../assets/CBCXNEB.png";
import LU4BK0Q from "../assets/LU4BK0Q.png";
import TRVXOAJ from "../assets/TRVXOAJ.png";
import LRMWK6M from "../assets/LRMWK6M.png";
import QYXQIMA from "../assets/QYXQIMA.png";

const Products = () => {
  return (
    <div className="hero">
      <h2 className="heading">All Products</h2>
      <div className="products">
        <img src={X0R1DJI} alt="products" />
        <img src={CBCXNEB} alt="products" />
        <img src={LU4BK0Q} alt="products" />
      </div>
      <h2 className="heading">All Services</h2>
      <div className="products">
        <img src={TRVXOAJ} alt="products" />
        <img src={X0R1DJI} alt="products" />
        <img src={QYXQIMA} alt="products" />
      </div>
    </div>
  );
};

export default Products;
