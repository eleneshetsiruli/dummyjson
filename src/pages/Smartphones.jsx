import { useEffect, useState } from "react";
import { ProductCard } from "../pages/Products";

export const Smartphones = () => {
  const [smartphones, setSmartphones] = useState([]);

  function loadHomeProd() {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((data) => setSmartphones(data));
  }

  useEffect(() => {
    loadHomeProd();
  }, []);

  return (
    <div className=" h-[470px] flex flex-wrap flex-row gap-20 justify-between shadow-md p-2 mb-6 bg-white rounded-md">
      {smartphones.products?.map((el) => (
        <ProductCard key={el.id} data={el} />
      ))}
    </div>
  );
};
