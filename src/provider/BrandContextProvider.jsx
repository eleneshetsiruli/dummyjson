import { useEffect, useState } from "react";
import { BrandContext } from "../context/BrandContext";

export const BrandContextProvider = ({ children }) => {
  const [brandData, setBrandData] = useState([]);
  const [brandValue, setBrandValue] = useState("");

  function loadBrandData() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setBrandData(data.products));
  }

  useEffect(() => {
    loadBrandData();
  }, []);
  const filteredBrands = brandData.filter((el) => el.brand === brandValue);
  return (
    <BrandContext.Provider value={{ filteredBrands, setBrandValue }}>
      {children}
    </BrandContext.Provider>
  );
};
