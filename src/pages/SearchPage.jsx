import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { useState } from "react";
import { ProductCard } from "./Products";

export const SearchPage = () => {
  const [filtered, setFiltered] = useState([]);
  const { inpValue, setInpValue } = useContext(SearchContext);

  function getFilteredData() {
    fetch(`https://dummyjson.com/products/search?q=${inpValue}`)
      .then((res) => res.json())
      .then((data) => setFiltered(data.products));
  }

  useEffect(() => {
    getFilteredData();
  }, [inpValue]);

  return (
    <div className="flex flex-wrap gap-20 justify-center items-center pt-20">
      {filtered.map((el) => (
        <ProductCard key={el.id} data={el} />
      ))}
    </div>
  );
};
