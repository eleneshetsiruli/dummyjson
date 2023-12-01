import { useEffect, useState } from "react";
import { ProductCard } from "../pages/Products";

export const WomansShoes = () => {
  const [shoes, setShoes] = useState([]);

  function loadTopsProd() {
    fetch("https://dummyjson.com/products/category/womens-shoes")
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }

  useEffect(() => {
    loadTopsProd();
  }, []);

  return (
    <div className=" h-[470px] flex flex-wrap flex-row gap-20 justify-between shadow-md p-2 mb-6 bg-white rounded-md">
      {shoes.products?.map((el) => (
        <ProductCard key={el.id} data={el} />
      ))}
    </div>
  );
};
