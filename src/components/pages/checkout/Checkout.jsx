import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../common/Navigation';
import Alert from '../../common/Alert';
import { cartContext } from '../../context/CartContext';
import { states } from './states';
import './Checkout.css';

const StateSelect = ({ country }) => {
  return (
    <select name="state" id="state">
      {states[country].map((state, idx) => (
        <option key={idx} value={idx}>
          {state}
        </option>
      ))}
    </select>
  );
};

const Form = function ({ total }) {
  const [countries, setCountries] = React.useState([]);
  const [currCountry, setCurrCountry] = React.useState('United States');

  React.useEffect(() => {
    const getCountries = async () => {
      const res = await fetch('https://restcountries.com/v3.1/all');
      const data = await res.json();
      data.sort((a, b) => (a.name.common < b.name.common ? 1 : -1));
      setCountries(data);
    };
    getCountries();
  }, []);

  return (
    <form>
      <h4>Customer information</h4>
      <div className="form-control">
        <label htmlFor="email">
          Email Address <span>*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          required
        />
      </div>
      <h4>Billing details</h4>
      <div className="row">
        <div className="form-control">
          <label htmlFor="first_name">
            First name <span>*</span>
          </label>
          <input type="text" name="first_name" id="first_name" required />
        </div>
        <div className="form-control">
          <label htmlFor="last_name">
            Last name <span>*</span>
          </label>
          <input type="text" name="last_name" id="last_name" required />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="company_name">Company name (optional)</label>
        <input type="text" name="company_name" id="company_name" />
      </div>
      <div className="form-control">
        <label htmlFor="country">
          Country / Region <span>*</span>
        </label>
        <select
          name="countries"
          id="countries"
          value={currCountry}
          onChange={(e) => setCurrCountry(e.target.value)}
          required
        >
          {countries.map((country, idx) => (
            <option key={idx} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>
      <div className="row">
        <div className="form-control">
          <label htmlFor="street_addrss">
            Street address <span>*</span>
          </label>
          <input
            type="text"
            name="street_addrss"
            id="street_addrss"
            placeholder="House number and street name"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="apartment">
            Apartment, suite, unit, etc. (optional)
          </label>
          <input
            type="text"
            name="apartment"
            id="apartment"
            placeholder="Apartment, suite, unit, etc. (optional)"
          />
        </div>
      </div>
      <div className="row">
        <div className="form-control">
          <label htmlFor="city">
            Town / City <span>*</span>
          </label>
          <input type="text" name="city" id="city" required />
        </div>
        <div className="form-control">
          <label htmlFor="state">
            State <span>*</span>
          </label>
          {states[currCountry] ? (
            <StateSelect country={currCountry} />
          ) : (
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Select an option..."
              required
            />
          )}
        </div>
        <div className="form-control">
          <label htmlFor="zip_code">
            ZIP Code <span>*</span>
          </label>
          <input type="text" name="zip_code" id="zip_code" required />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="phone">
          Phone <span>*</span>
        </label>
        <input type="text" name="phone" id="phone" required />
      </div>
      <h4>Additional informaiton</h4>
      <div className="form-control">
        <label htmlFor="note">Order notes (optional)</label>
        <textarea
          name="note"
          id="note"
          placeholder="Notes about your order, e.g. special notes for delivery."
        ></textarea>
      </div>
      <h4>Payment</h4>
      <Alert msg="Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements." />
      <button type="submit">Place Order ${total}</button>
    </form>
  );
};

const Order = function ({ products, total }) {
  return (
    <div id="checkout_product-preview" className="checkout_product-prev">
      <div>
        <h4>Your order</h4>
        <table>
          <tbody>
            <tr>
              <td>Product</td>
              <td>Subtotal</td>
            </tr>
            {products.map((product, idx) => (
              <tr key={idx}>
                <td>
                  <img src={product.img} alt="product-img" />
                  <p>
                    {product.title} x {product.quantity}
                  </p>
                </td>
                <td>${(product.price * product.quantity).toFixed(2)}</td>
              </tr>
            ))}
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
      </div>
    </div>
  );
};

const OrderSummary = function ({ products, total }) {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div id="product-summary" className="checkout_product-prev">
      <div
        onClick={() => setIsActive((prev) => !prev)}
        id="product-summary_head"
      >
        <p>
          {isActive ? 'Hide' : 'Show'} Order Summary{' '}
          <span className={isActive ? 'rounded' : ''}>
            <i className="fa-solid fa-caret-down"></i>
          </span>
        </p>
        <p>$total</p>
      </div>
      <table className={isActive ? 'show-table' : 'hide-table'}>
        <tbody>
          {products.map((product, idx) => (
            <tr key={idx}>
              <td>
                <img src={product.img} alt="product-img" />
                <p>
                  {product.title} x {product.quantity}
                </p>
              </td>
              <td>${(product.price * product.quantity).toFixed(2)}</td>
            </tr>
          ))}
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
    </div>
  );
};

function Checkout() {
  const { cartProducts } = React.useContext(cartContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (cartProducts.length === 0) navigate('/cart');
  }, [cartProducts]);

  const total = cartProducts
    .reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    .toFixed(2);

  return (
    <div id="checkout-page">
      <Navigation theme="dark" />
      <div className="container checkout_container">
        <h3>Checkout</h3>
        {cartProducts.length !== 0 && (
          <div id="checkout_body">
            <OrderSummary products={cartProducts} total={total} />
            <Form total={total} />
            <Order products={cartProducts} total={total} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
