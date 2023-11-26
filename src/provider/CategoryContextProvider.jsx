import { useEffect, useState, useCallback } from "react";
import { CategoryContext } from "../context/CategoryContext";

export const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [catValue, setCatValue] = useState("smartphones");

  const loadCategories = useCallback(() => {
    fetch(`https://dummyjson.com/products/category/${catValue}`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [catValue]);

  useEffect(() => {
    loadCategories();
  }, [catValue, loadCategories]);

  return (
    <CategoryContext.Provider value={[categories, setCatValue, catValue]}>
      {children}
    </CategoryContext.Provider>
  );
};
