import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);

  const addToCart = (pd) => {
    if (pd.quantity) {
      const newCart = cartProduct.filter((p) => p.key !== pd.key);
      pd.quantity += 1;
      newCart.push(pd);
      setCartProduct(newCart);
    } else {
      pd.quantity = 1;
      const newCart = [...cartProduct, pd];
      setCartProduct(newCart);
    }
    addToDb(pd.key);
  };

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 21)));
  }, []);

  useEffect(() => {
    const storedProduct = getStoredCart();
    const newCart = [];
    for (const property in storedProduct) {
      const item = products.find((item) => item.key === property);
      if (item) {
        item["quantity"] = storedProduct[property];
        newCart.push(item);
      }
    }
    setCartProduct(newCart);
  }, [products]);

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((pd) => (
          <Product key={pd.key} Product={pd} addToCart={addToCart}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cartProduct={cartProduct}></Cart>
      </div>
    </div>
  );
};

export default Shop;
