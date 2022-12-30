import React from 'react';
import Collections from './Collections';
import Features from './Features';
import Header from './Header';
import './home.css';
import HomeSetups from './HomeSetups';
import Info from './Info';
import ProductsCategory from './ProductsCategory';
import ShowCase from './ShowCase';

const MainPage = () => {
  return (
    <div>
      <Header />
      <ProductsCategory />
      <ShowCase />
      <Info />
      <Features />
      <Collections />
      <HomeSetups />
    </div>
  );
};

export default MainPage;
