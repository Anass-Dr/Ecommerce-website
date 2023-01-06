import React, { useState, useContext, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../common/Navigation';
import Alert from '../../common/Alert';
import { cartContext } from '../../context/CartContext';
import './Cart.css';

function Cart() {
  const { cartProducts, setCartProducts, handleCartItems } =
    useContext(cartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setProducts(cartProducts);
  }, []);

  const handleSubQuantity = (idx) => {
    let list = [...products].map((product, i) => {
      if (idx === i) {
        const q = product.quantity === 1 ? 1 : product.quantity - 1;
        return { ...product, quantity: q };
      } else return product;
    });
    setProducts(list);
  };

  const handleAddQuantity = (idx) => {
    const list = [...products].map((product, i) => {
      if (idx === i) return { ...product, quantity: product.quantity + 1 };
      else return product;
    });
    setProducts(list);
  };

  const handleInputChange = (event, idx) => {
    const list = [...products].map((item, i) => {
      if (idx === i) return event.target.value > 1 ? event.target.value : 1;
      else return item;
    });
    setProducts(list);
  };

  const handleProductDelete = (idx) => {
    const list = [...products].filter((product, i) => {
      return i !== idx;
    });
    setProducts(list);
  };

  useEffect(() => {
    setCartProducts(products);
  }, [products]);

  const total = useMemo(
    () =>
      products
        .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
        .toFixed(2),
    [products]
  );
  return (
    <div id="cart-page">
      <Navigation theme="dark" />
      <div className="container">
        <h3>Cart</h3>
        {products.length === 0 ? (
          <Alert msg="Your cart is currently empty." />
        ) : (
          <div id="cart-body">
            <table id="products-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      <img src={item.img} alt="product-img" />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>
                      <div className="product-quantity">
                        <span onClick={() => handleSubQuantity(idx)}>-</span>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={() => handleInputChange(idx)}
                        />
                        <span onClick={() => handleAddQuantity(idx)}>+</span>
                      </div>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <span onClick={() => handleProductDelete(idx)}>
                        &#10005;
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div id="cart-totals">
              <h5>Cart totals</h5>
              <div id="cart-totals--wrapper">
                <table>
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td>${total}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>${total}</td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <span>Have a coupon?</span>
                </div>
                <Link className="btn" to="/checkout">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
