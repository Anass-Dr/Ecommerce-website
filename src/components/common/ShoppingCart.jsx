import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactDom from 'react-dom';
import xIcon from '../../assets/icons/x-icon.svg';
import { cartContext } from '../context/CartContext';
import Overlay from './Overlay';
import './ShoppingCart.css';

function ShppingCart() {
  const {
    isCartOpen: mode,
    cartProducts: products,
    handleCart,
    handleCartItems,
  } = useContext(cartContext);

  const subTotal =
    products.length === 0
      ? 0
      : products
          .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
          .toFixed(2);

  return ReactDom.createPortal(
    <>
      {mode && <Overlay backgroundColor="#000" opacity=".4" zIndex="100" />}
      <aside className={`shopping-cart ${mode ? 'shopping-cart--active' : ''}`}>
        <div className="shopping-cart--head">
          <p>Shopping Cart</p>
          <button onClick={handleCart}>
            <img src={xIcon} />
          </button>
        </div>
        <div
          className={`shopping-cart--body ${
            products.length === 0 ? 'empty-cart' : ''
          }`}
        >
          <ul>
            {products.map((item, idx) => (
              <li key={idx}>
                <div>
                  <img
                    className="product-img"
                    src={item?.img}
                    alt="product-img"
                  />
                </div>
                <div className="product-info">
                  <p className="product-info--title">{item?.title}</p>
                  <p className="product-info--price">
                    <span>{item?.quantity} &#215; </span>
                    <span>${item?.price.toFixed(2)}</span>
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleCartItems({ product: item, action: 'remove' })
                  }
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
        {products.length !== 0 && (
          <>
            <div className="subtotal">
              <p>Subtotal:</p>
              <p>${subTotal}</p>
            </div>
            <div className="shopping-cart--action view-cart">
              <Link
                onClick={() => {
                  handleCart();
                  document.body.style.overflow = 'auto';
                }}
                to="/cart"
              >
                <button>View cart</button>
              </Link>
            </div>
          </>
        )}
        <div
          className={`shopping-cart--action ${
            products.length === 0 ? 'continue--shopping' : 'checkout'
          }`}
        >
          <button>
            {products.length === 0 ? 'Continue Shopping' : 'Checkout'}
          </button>
        </div>
      </aside>
    </>,
    document.getElementById('portals')
  );
}

export default ShppingCart;
