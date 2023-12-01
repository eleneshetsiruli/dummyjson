import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!auth.token) {
    navigate("/login");
  }
  return <Outlet />;
};
export default ProtectedRoute;
