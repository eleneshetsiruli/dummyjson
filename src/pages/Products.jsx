import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  const [products, setProducts] = useState([]);

  const [countPage, setCountPage] = useState(10);
  const [params, setParams] = useState({
    limit: 10,
    skip: 50,
  });

  function handlepagesMore() {
    setCountPage((prev) => prev + 5);
    setParams({ ...params, limit: countPage });
  }

  function handlepagesLess() {
    setCountPage((prev) => prev - 5);
    setParams({ ...params, limit: countPage });
  }

  function loadProductsData() {
    const queryParams = new URLSearchParams(params);
    fetch("https://dummyjson.com/products?" + queryParams)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }

  useEffect(() => {
    loadProductsData();
  }, [params]);

  return (
    <>
      <div className="flex flex-wrap gap-20 justify-center items-center pt-20">
        {products.map((el) => (
          <ProductCard data={el} key={el.id} />
        ))}
      </div>
      <div className="flex justify-center mb-10 pt-[15px] ">
        <button
          className="w-[150px] bg-gray-300 border-t border-l  rounded-tl-lg p-4 rounded-bl-lg  "
          onClick={handlepagesLess}
        >
          less
        </button>
        <button
          className="w-[150px] bg-blue-300  border-t border-r  rounded-tr-lg p-4 rounded-br-lg"
          onClick={handlepagesMore}
        >
          more
        </button>
      </div>
    </>
  );
};

export function ProductCard({ data }) {
  return (
    <>
      <div className="w-[220px] h-[300px] flex flex-col justify-between shadow-md p-2 mb-6 bg-white rounded-md  ">
        <Link to={`/products/${data.id}`}>
          <img
            className="w-[100%] h-[200px]"
            src={data.images[0]}
            alt="images"
          />
        </Link>

        <h1 className="text-blue-300">{data.title}</h1>
        <h2 className="text-gray-400">{data.brand}</h2>
        <div className="flex justify-between">
          <span>{data.price}$</span>
          <button className="bg-blue-300 text-white w-[60px] rounded-[20px]">
            add
          </button>
        </div>
      </div>
    </>
  );
}
