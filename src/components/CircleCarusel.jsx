import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CircleCarusel = () => {
  const [data, setData] = useState([]);
  console.log(data);

  function getCarusel() {
    fetch("https://dummyjson.com/products/category/womens-shoes")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }
  useEffect(() => {
    getCarusel();
  }, []);

  const slideLeft = () => {
    let slidertwo = document.getElementById("slidertwo");
    slidertwo.scrollLeft = slidertwo.scrollLeft - 500;
  };

  const slideRight = () => {
    let slidertwo = document.getElementById("slidertwo");
    slidertwo.scrollLeft = slidertwo.scrollLeft + 500;
  };

  return (
    <>
      <h1 className="animeSale">Hurry up saleee to...</h1>
      <div className="relative flex items-center caruse ">
        <FaArrowAltCircleLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
          color="red"
        />

        <div
          id="slidertwo"
          className="w-full h-[300px] justify-center items-center  overflow-x-scroll scroll whitespace-nowrap scroll-smooth flex gap-10 "
        >
          {data.map((el) => (
            <>
              <Link to={`/products/${el.id}`}>
                <div key={el.id}>
                  <img
                    className="w-[100%] h-[120px] rounded-[50%]"
                    src={el.images[0]}
                  />
                  <div className="text-red-500 line-through"> {el.price} $</div>
                </div>
              </Link>
            </>
          ))}
        </div>

        <FaArrowAltCircleRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
          color="red"
        />
      </div>
    </>
  );
};
