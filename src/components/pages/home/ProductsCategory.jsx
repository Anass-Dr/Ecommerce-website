import React from 'react';
import { chairs, laptopStands, woodenDesk } from '../..';
import { svg } from './svg';

const Card = (props) => {
  const { styleName, imgSrc, imgAlt, title } = props.info;

  return (
    <div className={styleName}>
      <img src={imgSrc} alt={imgAlt} />
      <a href="#">
        <span className="grid-span">{title}</span>
        {svg.arrowRight}
      </a>
    </div>
  );
};

const Grid = () => {
  const cards = [
    {
      title: 'Wooden Desk',
      imgSrc: woodenDesk,
      imgAlt: 'wooden-desk',
      styleName: 'row-2',
    },
    {
      title: 'Chairs',
      imgSrc: chairs,
      imgAlt: 'chairs-img',
      styleName: 'row-1',
    },
    {
      title: 'Laptop Stands',
      imgSrc: laptopStands,
      imgAlt: 'laptop-stands',
      styleName: 'row-1',
    },
  ];

  return (
    <div className="grid">
      {cards.map((card, idx) => (
        <Card key={idx} info={card} />
      ))}
    </div>
  );
};

const ProductIcon = (props) => {
  const { icon, name } = props.product;

  return (
    <a href="#">
      {icon}
      <span>{name}</span>
    </a>
  );
};

const Flex = () => {
  const products = [
    { icon: svg.table, name: 'Tables' },
    { icon: svg.chair, name: 'Chairs' },
    { icon: svg.laptopStands, name: 'Laptop stands' },
    { icon: svg.monitorStands, name: 'Monitor stands' },
    { icon: svg.cabinets, name: 'Cabinets' },
    { icon: svg.mousePads, name: 'Mouse pads' },
    { icon: svg.studyLamp, name: 'Study lamp' },
    { icon: svg.deskPlants, name: 'Desk plants' },
  ];

  return (
    <div className="flex">
      {products.map((product, idx) => (
        <ProductIcon key={idx} product={product} />
      ))}
    </div>
  );
};

const ProductsCategory = () => {
  return (
    <section className="categories">
      <div className="container">
        <Grid />
        <Flex />
      </div>
    </section>
  );
};

export default ProductsCategory;
