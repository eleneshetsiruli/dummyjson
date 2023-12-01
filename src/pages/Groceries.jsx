import { useEffect, useState } from "react";
import { ProductCard } from "../pages/Products";

export const Groceries = () => {
  const [groceries, setGroceries] = useState([]);

  function loadGroceriesProd() {
    fetch("https://dummyjson.com/products/category/groceries")
      .then((res) => res.json())
      .then((data) => setGroceries(data));
  }

  useEffect(() => {
    loadGroceriesProd();
  }, []);

  return (
    <div className=" h-[470px] flex flex-wrap flex-row gap-20 justify-between shadow-md p-2 mb-6 bg-white rounded-md">
      {groceries.products?.map((el) => (
        <ProductCard key={el.id} data={el} />
      ))}
    </div>
  );
};
