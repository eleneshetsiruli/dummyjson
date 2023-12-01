import { useEffect, useState } from "react";
import { ProductCard } from "../pages/Products";

export const Laptops = () => {
  const [laptops, setLaptops] = useState([]);

  function loadlaptopProd() {
    fetch("https://dummyjson.com/products/category/laptops")
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }

  useEffect(() => {
    loadlaptopProd();
  }, []);

  return (
    <div className=" h-[470px] flex flex-wrap flex-row gap-20 justify-between shadow-md p-2 mb-6 bg-white rounded-md">
      {laptops.products?.map((el) => (
        <ProductCard key={el.id} data={el} />
      ))}
    </div>
  );
};
