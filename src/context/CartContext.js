import { createContext, useState } from "react";

const CartContext = createContext({
  productCount: 0,
  increaseCount: () => {},
  decreaseCount: () => {},
  addToCart: () => {},
});

export const CartContextProvider = (props) => {
  const [productCount, setProductCount] = useState(0);
  const [finalCount, setFinalCount] = useState(0);

//   useEffect(() => {
//     setFinalCount(finalCount + productCount)
//     setProductCount(0)
//   }, [productCount]) 

  const addToCartHandler = () => {
    const newCount = finalCount + productCount;
    setFinalCount(newCount);
    console.log(finalCount);
    console.log(productCount);
    setProductCount(0);
    console.log(productCount);
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
  return (
    <CartContext.Provider
      value={{
        productCount: productCount,
        increaseCount: increaseCountHandler,
        decreaseCount: decreaseCountHandler,
        addToCart: addToCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
