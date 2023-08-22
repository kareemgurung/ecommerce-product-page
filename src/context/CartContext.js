import { createContext, useState } from "react";

const CartContext = createContext({
  productCount: 0,
  finalCount: 0,
  increaseCount: () => {},
  decreaseCount: () => {},
  addToCart: () => {},
  showCart: false,
  toggleCart: () => {},
  emptyCart: () => {},
});

export const CartContextProvider = (props) => {
  const [productCount, setProductCount] = useState(0);
  const [finalCount, setFinalCount] = useState(0);
  const [showCart, setShowCart] = useState(true);

  const addToCartHandler = () => {
    const newCount = finalCount + productCount;
    setFinalCount(newCount);
    setProductCount(0);
  };

  const increaseCountHandler = () => {
    const newCount = productCount + 1;
    setProductCount(newCount);
  };

  const decreaseCountHandler = () => {
    if (productCount === 0) return;

    const newCount = productCount - 1;
    setProductCount(newCount);
  };

  const cartHandler = () => {
    setShowCart((prev) => !prev);
  };

  const emptyCartHandler = () => {
    setFinalCount(0);
  };

  return (
    <CartContext.Provider
      value={{
        productCount: productCount,
        finalCount: finalCount,
        increaseCount: increaseCountHandler,
        decreaseCount: decreaseCountHandler,
        addToCart: addToCartHandler,
        showCart: showCart,
        toggleCart: cartHandler,
        emptyCart: emptyCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
