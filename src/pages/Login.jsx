import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const { handleLogIn } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({
    username: "atuny0",
    password: "9uQFF1Lh",
  });
  const navigate = useNavigate();
  const handleloginClick = () => {
    handleLogIn();
    navigate("/");
  };
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <div className="flex flex-col w-[300px]">
        <input className="text-center" type="text" placeholder="username" />
        <input className="text-center" type="password" placeholder="password" />
        <button
          className="bg-blue-400 rounded-[20px]"
          onClick={handleloginClick}
        >
          login
        </button>
        <br />
        <Link className="underline" to={"/register"}>
          register
        </Link>
      </div>
    </div>
  );
};
