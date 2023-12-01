import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ProductCard } from "./Products";

import { Categories } from "./Categories";

export const Header = () => {
  const { cartItems } = useContext(CartContext);
  const { auth, logOut, setAuth } = useContext(AuthContext);
  const [searchValue, setSearchValue] = useState("");
  const [searchingData, setSearchingData] = useState([]);
  const [open, setOpen] = useState(false);

  console.log(searchingData);
  const onSearch = (searchTerm) => {
    fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setSearchingData(data.products));
    setSearchValue("");
    setOpen(!open);
  };

  return (
    <>
      <div className="bg-slate-900  flex items-center h-[60px] text-white gap-20 justify-around relative text-[18px] pl-[20px] pr-[20px]">
        <Link to={"/"}>
          <img
            className="w-[50px] rounded-[100px]"
            src="https://img.freepik.com/premium-photo/capricorn-aries-logo-zodiac-symbol_922007-1467.jpg?w=1060"
            alt=""
          />
        </Link>
        <div className="flex gap-20 ">
          <NavLink to={"/"} className="hover:text-orange-300">
            Home
          </NavLink>
          <Link className="hover:text-orange-300">
            <Categories />
          </Link>
          <NavLink to={"company"} className="hover:text-orange-300">
            Company
          </NavLink>
          <NavLink to={"products"} className="hover:text-orange-300">
            Products
          </NavLink>
          <div className="flex bg-white w-[350px] text-orange-400 rounded-[20px] h-[40px] justify-between ">
            <input
              type="text"
              className=" inp p-2 w-full h-full "
              onChange={(ev) => setSearchValue(ev.target.value)}
              value={searchValue}
            />
            <button
              onClick={() => onSearch(searchValue)}
              className="btn text-blue-800 italic "
            >
              search
            </button>
          </div>
          <div className={open ? "dropdown" : "hidden"}>
            {searchingData.map((el) => (
              <div
                onClick={() => setOpen(false)}
                className="dropdown-row"
                key={el.id}
              >
                <ProductCard key={el.id} data={el} />
              </div>
            ))}
            <button
              onClick={() => setOpen(!open)}
              className=" border-b border-l rounded-bl-2xl p-4 text-black bg-red-700 h-[30px] w-[30px] text-white absolute top-0 right-0 flex justify-center items-center italic"
            >
              X
            </button>
          </div>
          <div className="flex items-center gap-4">
            <Link to={"cart"}>
              <div className="text-[22px] flex items-center gap-1">
                🛒
                <span className="text-[15px] text-orange-300 ">
                  {cartItems.length}
                </span>
              </div>
            </Link>

            <Link to={"profile"} className="flex items-center text-[22px]">
              👤
            </Link>
          </div>
        </div>
        {auth.token && <button onClick={logOut}>log out</button>}
      </div>
    </>
  );
};
