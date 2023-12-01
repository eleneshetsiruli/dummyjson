import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { handleLogIn, auth } = useContext(AuthContext);
  const [data, setData] = useState({ username: "", password: "" });

  function myLoginFunc() {
    handleLogIn(data);
    if (data.username === "atuny0") {
      navigate("/");
    }
  }

  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <div className="flex flex-col w-[300px]">
        <input
          onChange={(ev) => setData({ ...data, username: ev.target.value })}
          className="text-center"
          type="text"
          placeholder="username"
          value={data.username}
        />
        <input
          className="text-center"
          type="password"
          placeholder="password"
          onChange={(ev) => setData({ ...data, password: ev.target.value })}
          value={data.password}
        />

        <button className="bg-blue-400 rounded-[20px]" onClick={myLoginFunc}>
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
