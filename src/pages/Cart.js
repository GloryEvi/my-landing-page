import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-6">
          <div className="cart1">
            <p className="paragraphs">Shopping Cart</p>
            <hr />
            <p className="cart0">Your cart is empty</p>
          </div>
          <div className="cart2 mt-3">
            <p className="paragraphs">Saved For Later(0)</p>
            <hr />
            <p className="cart3">You have no items saved for later</p>
          </div>
        </div>
        <div className="col-6 check">
          <p className="paragraphs">Order Summary</p>
          <hr />
          <button className="check1">Check out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
