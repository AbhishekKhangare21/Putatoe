import React from "react";
import "./Category.css";
import category1 from "../assets/MOBILE-Recharge-blue-png.png";
import category2 from "../assets/CREDIT-CARD-blue-png.png";
import category3 from "../assets/HOME-LOAN-blue-png .png";
import category4 from "../assets/NEWS-blue-png.png";
import category5 from "../assets/PROMOTION-blue-png.png";
import category6 from "../assets/BLOG-2-blue-png.png";

const Category = () => {
  return (
    <div className="category">
      <div class="col-lg-2 ">
        <div class="bg-white bg-rec">
          <img src={category1} class="image" />
        </div>
        MOBILE RECHARGE
      </div>
      <div class="col-lg-2 ">
        <div class="bg-white bg-rec">
          <img src={category2} class="image" />
        </div>
        DTH RECHARGE
      </div>
      <div class="col-lg-2 ">
        <div class="bg-white bg-rec">
          <img src={category3} class="image" />
        </div>
        LOANS
      </div>
      <div class="col-lg-2 ">
        <div class="bg-white bg-rec">
          <img src={category4} class="image" />
        </div>
        NEWS
      </div>
      <div class="col-lg-2 ">
        <div class="bg-white bg-rec">
          <img src={category5} class="image" />
        </div>
        PROMOTIONS
      </div>
      <div class="col-lg-2 ">
        <div class="bg-white bg-rec">
          <img src={category6} class="image" />
        </div>
        BLOGS
      </div>
    </div>
  );
};

export default Category;
