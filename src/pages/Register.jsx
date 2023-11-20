import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [registerUser, setRegisterUser] = useState({
    firstName: "Muhammad",
    lastName: "Ovi",
    age: 250,
  });

  function handleRegister() {
    axios
      .post(
        "https://dummyjson.com/users/add",
        {
          registerUser,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error:", error));
    alert("User successfully add");
    navigate("/login");
  }

  return (
    <div className=" h-[100vh] flex flex-col justify-center items-center">
      <div className="flex flex-col w-[600px]">
        <input type="text" placeholder="firstname" />
        <input type="text" placeholder="lastname" />
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder=" re enter password" />
        <input type="text" placeholder="address" />
        <select>
          <option>georgia🇬🇪</option>
          <option>usa 🇺🇸</option>
          <option>frence 🇫🇷</option>
          <option>german 🇩🇪</option>
          <option>italy 🇮🇹</option>
        </select>
        <button className="bg-blue-400 rounded-[20px]" onClick={handleRegister}>
          submit
        </button>
      </div>
    </div>
  );
};
