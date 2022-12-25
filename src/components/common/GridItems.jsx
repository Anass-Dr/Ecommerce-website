import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Overlay from './Overlay';
import { Link } from 'react-router-dom';
import ProductPrevBody from './ProductPrevBody';
import './GridItems.css';

const Product = (props) => {
  const { title, price, image } = props.product;

  return (
    <figure
      className={`product-card ${
        props.theme === 'list' ? 'product-card__list' : 'product-card__grid'
      }`}
    >
      <div className="product-card--head">
        <Link to={`/product/${title}`}>
          <img src={image} />
        </Link>
        <button
          className="product-card--head__btn"
          onClick={() => props.onClick(props.id)}
        >
          Quick View
        </button>
      </div>
      <div className="product-card--body">
        <p className="product-card--body__title">{title}</p>
        <p className="product-card--body__price">${price.toFixed(2)}</p>
        <div className="product-card--body__stars">
          {[...Array(5)].map((n, i) => (
            <i key={i} className="fa-regular fa-star"></i>
          ))}
        </div>
        {props.theme === 'list' && (
          <p className="product-card--body__desc">
            {props.product.description}
          </p>
        )}
      </div>
    </figure>
  );
};

const ProductPreview = (props) => {
  return ReactDom.createPortal(
    <div className="product-prev">
      <Overlay backgroundColor="#000" opacity=".58" />
      <ProductPrevBody
        product={props.product}
        size="sm"
        handleClosePrev={props.handleClosePrev}
      />
    </div>,
    document.getElementById('portals')
  );
};

function GridItems({ products, size, theme }) {
  const [onPreview, setOnPreview] = useState(false);
  const [currProductId, setCurrProductId] = useState(0);

  const handleOpenPrev = (id) => {
    setCurrProductId(id);
    setOnPreview(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClosePrev = () => {
    setOnPreview(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div
      className={`grid ${size === 'sm' ? 'grid-sm' : 'grid-lg'} ${
        theme === 'list' ? 'grid-md' : ''
      }`}
    >
      {products.map((product, idx) => (
        <Product
          theme={theme}
          key={idx}
          id={idx}
          product={product}
          onClick={handleOpenPrev}
        />
      ))}
      {onPreview && (
        <ProductPreview
          product={products[currProductId]}
          handleClosePrev={handleClosePrev}
        />
      )}
    </div>
  );
}

export default GridItems;
