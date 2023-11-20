import { useContext } from "react";

import { useNavigate } from "react-router";
import { SearchContext } from "../context/SearchContext";

export const Finder = () => {
  const { inpValue, setInpValue } = useContext(SearchContext);
  const navigate = useNavigate();

  function handleSearch() {
    navigate("search");
    setInpValue("");
  }

  return (
    <>
      <div className="w-[500px] h-[30px] bg-white flex justify-between rounded-[20px] ">
        <input
          className="rounded-[20px] w-[100%] border-0 "
          type="text"
          onChange={(ev) => setInpValue(ev.target.value)}
          value={inpValue}
        />
        <button
          onClick={handleSearch}
          className="bg-gray-500 w-[120px] rounded-[20px]"
        >
          search
        </button>
      </div>
    </>
  );
};
