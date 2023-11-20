import { NavLink, useNavigate } from "react-router-dom";

import { Categories } from "./Categories";
import { Finder } from "../components/Finder";

export const Header = () => {
  return (
    <div className="flex justify-between items-center h-[60px] bg-gray-300 pl-5 pr-5">
      <div className="flex gap-10 items-center">
        <Categories />
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"products"}>PRODUCTS</NavLink>
      </div>
      <Finder />
      <NavLink to={"login"}>LOGIN</NavLink>
    </div>
  );
};
