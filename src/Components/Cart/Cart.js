import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cartProduct } = props;

  let totalProduct = 0,
    productCost = 0;
  cartProduct.forEach((element) => {
    totalProduct += element.quantity;
    productCost += element.price * element.quantity;
  });

  let shippingCost = 15.0;
  if (productCost > 200) {
    shippingCost = 30.0;
  } else if (productCost > 500) {
    shippingCost = 50.0;
  } else if (productCost > 1000) {
    shippingCost = 60.0;
  }
  const totalBefore = productCost > 0 ? productCost + shippingCost : 0;
  const tax = totalBefore * 0.15;
  const total = totalProduct > 0 ? tax + shippingCost + productCost : 0;

  return (
    <div>
      <h3>Order Summary</h3>
      <p className="item-count">Items Ordered: {totalProduct}</p>

      <div className="shopping-details">
        <p className="amounts">
          <span>Items: </span> <span>${productCost.toFixed(2)}</span>
        </p>
        <p className="amounts">
          <span>Shipping & Handling: </span>{" "}
          <span>${shippingCost.toFixed(2)}</span>
        </p>
        <p className="amounts">
          <span>Total(Before Tax): </span>{" "}
          <span>${totalBefore.toFixed(2)}</span>
        </p>
        <p className="amounts">
          <span>Estimated Tax: </span> <span>${tax.toFixed(2)}</span>
        </p>
        <p className="amounts total-amount">
          <span>Order Total: </span> <span>${total.toFixed(2)}</span>
        </p>
      </div>

      <div className="review-btn">
        <button className="purchase-btn">Review Your Orders</button>
      </div>
    </div>
  );
};

export default Cart;
