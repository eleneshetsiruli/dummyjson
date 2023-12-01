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
import { Cart } from "./pages/Cart";
import { Header } from "./pages/Header";
import Company from "./pages/Company";

import { BrandsPage } from "./pages/BrandsPage";
import { Profile } from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoutes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<PageCategories />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="skincare" element={<Skincare />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="company" element={<Company />} />
          <Route path="brands" element={<BrandsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
