import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div>
      <div className="master-card">
        <div>
          <h1 className="titel-card">CREDIT CARD</h1>
        </div>
        <div>
          <img
            src={require("../../src/card-credit.png")}
            className="img-card"
          />
        </div>
        <div className="main-card">
          <div>
            <h2 className="num-card">7253 3256 7895 1245</h2>
            <div className="par-card">
            <p>5422</p>
            <p>11/50</p>
            </div>
            <h3 class="header-card">CARDHOLDER</h3>
          </div>
          <div>
            <img src={require("../../src/visa.jpg")} className="img-visa" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
