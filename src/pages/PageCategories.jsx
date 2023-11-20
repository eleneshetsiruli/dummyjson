import React, { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { ProductCard } from "./Products";

export const PageCategories = () => {
  const [categories, setCatValue] = useContext(CategoryContext);

  return (
    <div className=" h-[470px] flex flex-wrap flex-row gap-20 justify-between shadow-md p-2 mb-6 bg-white rounded-md">
      {categories.products?.map((el) => (
        <ProductCard key={el.id} data={el} />
      ))}
    </div>
  );
};
