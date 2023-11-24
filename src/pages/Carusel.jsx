import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Carusel = () => {
  const [data, setData] = useState([]);

  function getCarusel() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }
  useEffect(() => {
    getCarusel();
  }, []);

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="relative flex items-center">
      <FaArrowAltCircleLeft
        className="opacity-50 cursor-pointer hover:opacity-100"
        onClick={slideLeft}
        size={40}
        color="gray"
      />
      <div
        id="slider"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
      >
        {data.map((item) => (
          <>
            <Link to={`/products/${item.id}`}>
              <img
                className="w-[220px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 "
                key={item.id}
                src={item.images[0]}
              />
            </Link>
          </>
        ))}
      </div>
      <FaArrowAltCircleRight
        className="opacity-50 cursor-pointer hover:opacity-100"
        onClick={slideRight}
        size={40}
        color="gray"
      />
    </div>
  );
};
