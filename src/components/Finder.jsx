import { useContext } from "react";

import { useNavigate } from "react-router";
import { SearchContext } from "../context/SearchContext";

export const Finder = () => {
  const { inpValue, setInpValue } = useContext(SearchContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center p-[20px]">
      <div className=" w-[500px] h-[30px] bg-white  rounded-[20px] ">
        <input
          className="p-5 italic rounded-[20px] w-[100%] h-[40px] border-0  "
          type="text"
          onChange={(ev) => setInpValue(ev.target.value)}
          value={inpValue}
          placeholder="search here"
        />
      </div>
    </div>
  );
};
