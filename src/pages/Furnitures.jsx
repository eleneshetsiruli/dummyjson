import { useEffect, useState } from "react";
import { ProductCard } from "../pages/Products";

export const Furnitures = () => {
  const [furnitures, setFurnitures] = useState([]);

  function loadFurnituresProd() {
    fetch("https://dummyjson.com/products/category/furniture")
      .then((res) => res.json())
      .then((data) => setFurnitures(data));
  }

  useEffect(() => {
    loadFurnituresProd();
  }, []);

  return (
    <div className=" h-[470px] flex flex-wrap flex-row gap-20 justify-between shadow-md p-2 mb-6 bg-white rounded-md">
      {furnitures.products?.map((el) => (
        <ProductCard key={el.id} data={el} />
      ))}
    </div>
  );
};
