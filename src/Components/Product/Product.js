import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
const Products = (props) => {
  const { img, name, seller, price, stock, star, features } = props.Product;
  return (
    <div className="product-container">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-description">
        <h3 className="product-name">{name}</h3>
        <p>by: {seller}</p>
        <div className="description-container">
          <div className="details">
            <p className="price">${price}</p>
            <p>only {stock} left in stock - order soon</p>
            <button
              className="purchase-btn"
              onClick={() => props.addToCart(props.Product)}
            >
              <FontAwesomeIcon icon={faCartArrowDown} /> Add to Cart
            </button>
          </div>
          <div className="features">
            <Rating
              initialRating={star}
              readonly
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
            />
            <h4>Features: </h4>
            <span>
              <ul>
                {features.map((feature) => (
                  <li>
                    {feature.description}: {feature.value}
                  </li>
                ))}
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
