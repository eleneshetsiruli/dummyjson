import { useEffect, useState } from "react";
import { ProductCard } from "../pages/Products";

export const WomensDresses = () => {
  const [dresses, setDresses] = useState([]);

  function loadDressesProd() {
    fetch("https://dummyjson.com/products/category/womens-dresses")
      .then((res) => res.json())
      .then((data) => setDresses(data));
  }

  useEffect(() => {
    loadDressesProd();
  }, []);

  return (
    <div className=" h-[470px] flex flex-wrap flex-row gap-20 justify-between shadow-md p-2 mb-6 bg-white rounded-md">
      {dresses.products?.map((el) => (
        <ProductCard key={el.id} data={el} />
      ))}
    </div>
  );
};
