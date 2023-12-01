import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState({ maxValue: 0, minValue: 2000 });

  const [params, setParams] = useState({
    limit: 10,
    skip: 10,
  });

  function clearInputs() {
    setValue({ maxValue: 0, minValue: 1000 });
  }

  const filteredPriceItems = products.filter(
    (item) => item.price <= value.minValue && item.price >= value.maxValue
  );

  function handlePagesMore() {
    setParams({ ...params, limit: params.limit + 5 });
  }

  function handlePagesLess() {
    setParams({ ...params, limit: params.limit - 5 });
  }

  function loadProductsData() {
    const queryParams = new URLSearchParams(params);
    fetch("https://dummyjson.com/products?" + queryParams)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }

  const SortByPrice = () => {
    return (
      <div className="w-[300px] h-[60px] flex flex-col mt-10">
        <div>
          <input
            onChange={(ev) => setValue({ ...value, maxValue: ev.target.value })}
            value={value.maxValue}
            className=" sortinp text-center"
            type="number"
            placeholder="min price $"
          />
          <input
            onChange={(ev) => setValue({ ...value, minValue: ev.target.value })}
            value={value.minValue}
            className=" sortinp text-center"
            type="number"
            placeholder="max price $"
          />
        </div>
        <button
          onClick={clearInputs}
          className="flex justify-center bg-blue-300"
        >
          Clear
        </button>
      </div>
    );
  };

  useEffect(() => {
    loadProductsData();
  }, [params]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <SortByPrice />
      </div>
      <div className="flex flex-wrap gap-20 justify-center items-center pt-20 ">
        {filteredPriceItems.map((el) => (
          <ProductCard data={el} key={el.id} />
        ))}
      </div>

      <div className="flex justify-center mb-10 pt-[15px] ">
        <button
          className="w-[150px] bg-gray-300 border-t border-l  rounded-tl-lg p-4 rounded-bl-lg  "
          onClick={handlePagesLess}
        >
          less
        </button>
        <button
          className="w-[150px] bg-blue-300  border-t border-r  rounded-tr-lg p-4 rounded-br-lg"
          onClick={handlePagesMore}
        >
          more
        </button>
      </div>
    </div>
  );
};

export function ProductCard({ data }) {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="w-[220px] h-[340px] flex flex-col  justify-between shadow-md p-2 mb-6  rounded-[20px]  ">
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

          <button
            onClick={() => addToCart(data)}
            className="bg-blue-300 text-white w-[60px] rounded-[20px]"
          >
            add
          </button>
        </div>
      </div>
    </>
  );
}
