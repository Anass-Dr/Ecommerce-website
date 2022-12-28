import React from 'react';
import MainPage from './components/pages/home/MainPage';
import CartContextProvider from './components/context/CartContext';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './components/pages/product/ProductDetails';
import ShoppingCart from './components/common/ShoppingCart';
import Store from './components/pages/store/Store';
import OfficeSetup from './components/pages/setups/OfficeSetup';
import HomeSetup from './components/pages/setups/HomeSetup';

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <ShoppingCart />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:title" element={<ProductDetails />} />
          <Route path="/store" element={<Store />} />
          <Route path="/office-setups" element={<OfficeSetup />} />
          <Route path="/home-office-setups" element={<HomeSetup />} />
        </Routes>
      </div>
    </CartContextProvider>
  );
}

export default App;
