import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Products } from "./pages/Products";
import { Product } from "./pages/Product";
import { SearchPage } from "./pages/SearchPage";

import { PageCategories } from "./pages/PageCategories";
import { Skincare } from "./pages/SkinCare";
import { Profile } from "./pages/Profile";
import { Cart } from "./pages/Cart";
import { Header } from "./pages/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<PageCategories />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="skincare" element={<Skincare />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
