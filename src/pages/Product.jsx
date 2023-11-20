import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const params = useParams();
  function getSingleProduct() {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }
  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <div className=" items-center w-[80%] h-[400px] flex gap-5 shadow-md p-2 mb-6 bg-white rounded-md  m-20 ">
      {singleProduct.images?.map((el) => (
        <img
          className="object-cover w-[100px] h-[100px] transition-transform transform )"
          src={el}
          key={el.id}
        />
      ))}
      <div />
      <div className="items-center flex flex-col">
        <h1 className="text-blue-400">{singleProduct.title}</h1>
        <h2>
          <span className="text-blue-400">brand-</span>
          {singleProduct.brand}
        </h2>
        <h3>
          <span className="text-blue-400">category-</span>
          {singleProduct.category}
        </h3>
        <p>
          <span className="text-blue-400"> description-</span>
          {singleProduct.description}
        </p>
        <span className="text-red-500">{singleProduct.price}$</span>

        <span>{singleProduct.raiting}</span>
        <span>
          in stock:<span className="text-green-400">{singleProduct.stock}</span>
        </span>
        <button className="bg-blue-400 rounded-[20px] w-[140px] text-white">
          add to cart
        </button>
      </div>
    </div>
  );
};
