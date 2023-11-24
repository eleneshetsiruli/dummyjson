import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Header = () => {
  const { cartItems } = useContext(CartContext);
  const { auth, logOut } = useContext(AuthContext);

  return (
    <>
      <div className="bg-slate-900  flex items-center h-[60px] text-white gap-20 justify-around">
        <Link to={"/"}>
          <img
            className="w-[50px] rounded-[100px]"
            src="https://img.freepik.com/premium-photo/capricorn-aries-logo-zodiac-symbol_922007-1467.jpg?w=1060"
            alt=""
          />
        </Link>
        <div className="flex gap-20 ">
          <Link to={"/"} className="hover:text-orange-300">
            Home
          </Link>
          <Link className="hover:text-orange-300">Company</Link>
          <Link to={"products"} className="hover:text-orange-300">
            Products
          </Link>
          <input
            type="text"
            className="w-[350px] text-orange-400 rounded-[20px] p-2"
          />
          <Link to={"cart"}>
            <div className="text-[22px] flex items-center">
              🛒
              <span className="text-[15px] text-orange-300 ">
                ({cartItems.length})
              </span>
            </div>
          </Link>
        </div>
        <Link
          to={"login"}
          className="hover:text-red-600 border-solid border-white"
        >
          {auth.username === "atuny0" ? (
            <button onClick={logOut}>logOut</button>
          ) : (
            <button>logIn</button>
          )}
        </Link>
      </div>
    </>
  );
};
