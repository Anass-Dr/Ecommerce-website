import React from 'react';
import MainPage from './components/pages/home/MainPage';
import CartContextProvider from './components/context/CartContext';
import NavbarContextProvider from './components/context/NavbarContext';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './components/pages/product/ProductDetails';
import ShoppingCart from './components/common/ShoppingCart';
import NavigationBar from './components/common/NavigationBar';
import CustomSetup from './components/common/CustomSetup';
import Footer from './components/common/Footer';
import Store from './components/pages/store/Store';
import OfficeSetup from './components/pages/setups/OfficeSetup';
import HomeSetup from './components/pages/setups/HomeSetup';
import About from './components/pages/info/About';
import Contact from './components/pages/info/Contact';
import Cart from './components/pages/cart/Cart';
import Checkout from './components/pages/checkout/Checkout';

function App() {
  return (
    <CartContextProvider>
      <NavbarContextProvider>
        <div className="App">
          <ShoppingCart />
          <NavigationBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/product/:title" element={<ProductDetails />} />
            <Route path="/shop" element={<Store />} />
            <Route path="/office-setups" element={<OfficeSetup />} />
            <Route path="/home-office-setups" element={<HomeSetup />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <CustomSetup />
          <Footer />
        </div>
      </NavbarContextProvider>
    </CartContextProvider>
  );
}

export default App;
