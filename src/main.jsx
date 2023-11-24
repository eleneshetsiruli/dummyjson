import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./provider/AuthContextProvider.jsx";
import { SearchContextProvider } from "./provider/SearchContextProvider.jsx";
import { CategoryContextProvider } from "./provider/CategoryContextProvider.jsx";
import { CartContextProvider } from "./provider/CartContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CategoryContextProvider>
    <AuthContextProvider>
      <SearchContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </BrowserRouter>
        </CartContextProvider>
      </SearchContextProvider>
    </AuthContextProvider>
  </CategoryContextProvider>
);
