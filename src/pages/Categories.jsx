import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { FaChevronDown } from "react-icons/fa";

export const Categories = () => {
  const [ishidden, setIsHidden] = useState(true);
  const [categories, setCatValue] = useContext(CategoryContext);
  return (
    <>
      <div>
        <div onClick={() => setIsHidden(!ishidden)}>
          <div className="flex items-center gap-2">
            <span>categories</span> <FaChevronDown />
          </div>
        </div>
        <div className={ishidden ? "hidden" : "active"}>
          <div
            onClick={() => setIsHidden(!ishidden)}
            className=" category-box top-[60px] right-[65%] text-gray-600 flex flex-col absolute bg-white w-[300px] h-[420px] gap-6 rounded-[10px] items-center"
          >
            <NavLink
              to={"categories"}
              onClick={() => setCatValue("smartphones")}
            >
              📱smartphones
            </NavLink>
            <NavLink to={"categories"} onClick={() => setCatValue("laptops")}>
              💻laptops
            </NavLink>
            <NavLink to={"categories"} onClick={() => setCatValue("skincare")}>
              🧴skincare
            </NavLink>
            <NavLink to={"categories"} onClick={() => setCatValue("furniture")}>
              🛋️furniture
            </NavLink>
            <NavLink to={"categories"} onClick={() => setCatValue("tops")}>
              🎽tops
            </NavLink>
            <NavLink
              to={"categories"}
              onClick={() => setCatValue("sunglasses")}
            >
              🕶️sunglasses
            </NavLink>

            <NavLink
              to={"categories"}
              onClick={() => setCatValue("automotive")}
            >
              🛞automotive
            </NavLink>
            <NavLink to={"categories"} onClick={() => setCatValue("lighting")}>
              💡lighting
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
