import { useEffect, useState } from "react";
import { ProductCard } from "../pages/Products";

export const Tops = () => {
  const [tops, setTops] = useState([]);

  function loadTopsProd() {
    fetch("https://dummyjson.com/products/category/Tops")
      .then((res) => res.json())
      .then((data) => setTops(data));
  }

  useEffect(() => {
    loadTopsProd();
  }, []);

  return (
    <div className=" h-[470px] flex flex-wrap flex-row gap-20 justify-between shadow-md p-2 mb-6 bg-white rounded-md">
      {tops.products?.map((el) => (
        <ProductCard key={el.id} data={el} />
      ))}
    </div>
  );
};
