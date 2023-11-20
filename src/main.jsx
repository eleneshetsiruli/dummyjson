import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./provider/AuthContextProvider.jsx";
import { SearchContextProvider } from "./provider/SearchContextProvider.jsx";
import { CategoryContextProvider } from "./provider/CategoryContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CategoryContextProvider>
    <AuthContextProvider>
      <SearchContextProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </SearchContextProvider>
    </AuthContextProvider>
  </CategoryContextProvider>
);
