import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import xIcon from '../../assets/icons/x-icon.svg';
import { cartContext } from '../context/CartContext';
import {
  visaPayment,
  masterCardPayment,
  amexPayment,
  discoverPayment,
} from '../';
import './ProductPrevBody.css';

function ProductPrevBody(props) {
  const { handleCartItems } = useContext(cartContext);
  const { image, category, title, price, description } = props.product;
  const categories = category.map((item) =>
    item
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ')
  );
  const [quantity, setQuantity] = useState(1);

  const handleSubQuantity = () => {
    setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
  };

  const handleAddQuantity = () => {
    setQuantity((prev) => +prev + 1);
  };

  return (
    <div className={`product-prev--body ${props.size}`}>
      <img className="product-prev--body__img" src={image} />
      <div>
        <div className="product-prev--body wrapper">
          <Link className="category" to="/product/01">
            {categories.join(', ')}
          </Link>
          <h4 className="product-prev--body__h4">{title}</h4>
          <p className="product-prev--body__shipping">
            <span className="product-prev--body__price">${price}</span> & Free
            Shipping
          </p>
          <p className="product-prev--body__desc ">{description}</p>
          <p className="product-prev--body__categories">
            <span>Category: </span>
            {categories.map((category) => (
              <a key={category} href="#">
                {category}
              </a>
            ))}
          </p>
          <div className="product-prev--body__payments">
            <p>Guaranteed Safe Checkout</p>
            <img src={visaPayment} alt="visa-card" />
            <img src={masterCardPayment} alt="master-card" />
            <img src={amexPayment} alt="amex-card" />
            <img src={discoverPayment} alt="discover-card" />
          </div>
        </div>
        <div className="add-to-cart">
          <div className="product-quantity">
            <p onClick={handleSubQuantity}>-</p>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="1"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <p onClick={handleAddQuantity}>+</p>
          </div>
          <button
            onClick={() =>
              handleCartItems({
                product: props.product,
                quantity,
                onPrev: props.size === 'sm' ? true : false,
              })
            }
          >
            Add to cart
          </button>
        </div>
      </div>
      {props.handleClosePrev && (
        <button className="btn-close" onClick={props.handleClosePrev}>
          <img className="btn-close__img" src={xIcon} />
        </button>
      )}
    </div>
  );
}

export default ProductPrevBody;
