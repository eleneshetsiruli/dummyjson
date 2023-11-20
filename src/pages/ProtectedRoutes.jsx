import { Outlet } from "react-router-dom";
import { ProductsLayOut } from "./ProductsLayOut";

const ProtectedRoute = () => {
  return (
    <ProductsLayOut>
      <Outlet />
    </ProductsLayOut>
  );
};
export default ProtectedRoute;
