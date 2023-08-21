import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartContextProvider } from "./context/CartContext";
import { ImageContextProvider } from "./context/ImageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContextProvider>
    <ImageContextProvider>
      <App />
    </ImageContextProvider>
  </CartContextProvider>
);
