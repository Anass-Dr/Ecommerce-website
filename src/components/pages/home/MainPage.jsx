import React from 'react';
import Collections from './Collections';
import CustomSetup from '../../common/CustomSetup';
import Features from './Features';
import Header from './Header';
import './home.css';
import HomeSetups from './HomeSetups';
import Info from './Info';
import ProductsCategory from './ProductsCategory';
import ShowCase from './ShowCase';
import Footer from '../../common/Footer';

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
      <CustomSetup />
      <Footer />
    </div>
  );
};

export default MainPage;
