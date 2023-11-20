import React, { useState } from "react";
import { SearchContext } from "../context/SearchContext";

export const SearchContextProvider = ({ children }) => {
  const [inpValue, setInpValue] = useState("");

  return (
    <div>
      <SearchContext.Provider value={{ inpValue, setInpValue }}>
        {children}
      </SearchContext.Provider>
    </div>
  );
};
