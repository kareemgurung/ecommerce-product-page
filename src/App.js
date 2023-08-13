import { createContext } from "react";
import Header from "./components/Header/Header";
import ProductPage from "./components/Product/ProductPage";

const QuantityContext = createContext(0);

function App() {
  return (
    <QuantityContext.Provider>
      <Header />
      <ProductPage />
    </QuantityContext.Provider>
  );
}

export default App;
