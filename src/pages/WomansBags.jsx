import { useEffect, useState } from "react";
import { ProductCard } from "../pages/Products";

export const WomansBags = () => {
  const [bags, setBags] = useState([]);

  function loadBagsProd() {
    fetch("https://dummyjson.com/products/category/womens-bags")
      .then((res) => res.json())
      .then((data) => setBags(data));
  }

  useEffect(() => {
    loadBagsProd();
  }, []);

  return (
    <div className=" h-[470px] flex flex-wrap flex-row gap-20 justify-between shadow-md p-2 mb-6 bg-white rounded-md">
      {bags.products?.map((el) => (
        <ProductCard key={el.id} data={el} />
      ))}
    </div>
  );
};
