import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { useState } from "react";
import { ProductCard } from "./Products";
import { Finder } from "../components/Finder";
import { Link } from "react-router-dom";

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
    <div className="bg flex flex-col">
      <div className="flex gap-80 items-center pl-10">
        <Link to={"/"}>
          <img
            className="w-[40px]"
            src="https://img.freepik.com/premium-photo/capricorn-aries-logo-zodiac-symbol_922007-1467.jpg"
            alt=""
          />
        </Link>
        <Finder />
      </div>
      <div className="flex flex-wrap gap-20 justify-center items-center pt-20 ">
        {filtered.map((el) => (
          <ProductCard key={el.id} data={el} />
        ))}
      </div>
    </div>
  );
};
