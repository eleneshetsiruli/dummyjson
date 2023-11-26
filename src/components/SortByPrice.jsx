import React, { useState } from "react";

export const SortByPrice = ({ data }) => {
  const [priceValue, setPriceValue] = useState(0);
  const [minPriceValue, setMinPriceValue] = useState(0);

  return (
    <div className="w-[300px] h-[60px] flex flex-col mt-10">
      <div>
        <input
          onChange={(ev) => setMinPriceValue(ev.target.value)}
          className=" sortinp text-center"
          type="number"
          placeholder="min price $"
        />
        <input
          onChange={(ev) => setPriceValue(ev.target.value)}
          className=" sortinp text-center"
          type="number"
          placeholder="max price $"
        />
      </div>
      <button
        onClick={() => data(priceValue, minPriceValue)}
        className="flex justify-center bg-blue-300"
      >
        sort ↴
      </button>
    </div>
  );
};
