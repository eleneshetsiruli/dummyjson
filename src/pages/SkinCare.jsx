import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Slider } from "react-slick";
import { ProductCard } from "./Products";
export const Skincare = () => {
  const [skincareProd, setSkinCare] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  function loadSkinProd() {
    fetch("https://dummyjson.com/products/category/skincare")
      .then((res) => res.json())
      .then((data) => setSkinCare(data));
  }

  useEffect(() => {
    loadSkinProd();
  }, []);

  return (
    <div className=" h-[470px] flex flex-wrap flex-row gap-20 justify-between shadow-md p-2 mb-6 bg-white rounded-md">
      {skincareProd.products?.map((el) => (
        <ProductCard key={el.id} data={el} />
      ))}
    </div>
  );
};
