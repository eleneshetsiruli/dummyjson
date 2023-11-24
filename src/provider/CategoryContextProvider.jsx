import { useEffect, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";

export const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [catValue, setCatValue] = useState("smartphones");

  function loadCategories() {
    fetch(`https://dummyjson.com/products/category/${catValue}`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }
  useEffect(() => {
    loadCategories();
  }, [catValue]);

  return (
    <CategoryContext.Provider value={[categories, setCatValue, catValue]}>
      {children}
    </CategoryContext.Provider>
  );
};
