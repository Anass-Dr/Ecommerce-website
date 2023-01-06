import React, { createContext, useState } from 'react';

export const cartContext = createContext('cartContext');

const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOnPrev, setIsOnPrev] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  const addProduct = (product, quantity) => {
    const isExist = Boolean(
      cartProducts.filter((obj) => obj.title === product.title).length
    );

    if (isExist) {
      const newProducts = cartProducts.map((item) => {
        if (item.title === product.title) return { ...item, quantity };
        else return item;
      });

      setCartProducts(newProducts);
    } else {
      setCartProducts((prev) => [
        ...prev,
        {
          title: product.title,
          img: product.image,
          price: product.price,
          quantity,
        },
      ]);
    }

    if (!isCartOpen) {
      setIsCartOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const removeProduct = (product) => {
    const newProducts = cartProducts.filter(
      (obj) => obj.title !== product.title
    );
    setCartProducts(newProducts);
  };

  const handleCart = () => {
    if (isCartOpen) {
      setIsCartOpen(false);
      document.body.style.overflow = isOnPrev ? 'hidden' : 'auto';
      setIsOnPrev(false);
    } else {
      setIsCartOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const handleCartItems = (params) => {
    const {
      product,
      quantity = undefined,
      action = 'add',
      onPrev = false,
    } = params;
    if (onPrev) setIsOnPrev(true);
    if (action === 'add') addProduct(product, quantity);
    else if (action === 'remove') removeProduct(product);
  };

  return (
    <cartContext.Provider
      value={{
        isCartOpen,
        cartProducts,
        setCartProducts,
        handleCart,
        handleCartItems,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
