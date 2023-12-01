import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const [sumAll, setSumAll] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <h1 className="cartText">my cart</h1>
      <div className=" w-[200px] h-[40px] border flex justify-center items-center">
        {sumAll}
        <span className="text-green-600">$</span>
      </div>
      <div className="flex gap-10 m-20">
        {cartItems.map((el) => (
          <CartProd key={el.id} data={el} set={setSumAll} />
        ))}
      </div>
    </div>
  );
};
function CartProd({ data, set }) {
  const { removeCart } = useContext(CartContext);
  const price = data.price;
  const [inpNumber, setInpNumber] = useState(0);

  function handleBuy() {
    const sumNumber = price * inpNumber;
    set((prev) => prev + sumNumber);
    setInpNumber(0);
  }

  return (
    <>
      <div className="w-[220px] h-[340px] flex flex-col justify-between shadow-md p-2 mb-6  rounded-[20px] ">
        <div className="flex flex-col gap-2">
          <img className="h-[150px] " src={data.images[0]} alt="images" />
          <h1 className="text-blue-300 r">{data.title}</h1>
        </div>
        <div className="flex justify-between ">
          <input
            className="w-[55px] border text-center "
            type="number"
            onChange={(ev) => setInpNumber(ev.target.value)}
            value={inpNumber}
          />
          <button
            onClick={handleBuy}
            className="border rounded-[50px] w-[60px] bg-blue-800 text-white"
          >
            +
          </button>
        </div>

        <div className="flex justify-between">
          <span>{data.price}$</span>

          <button
            onClick={() => removeCart(data.id)}
            className=" w-[80px] bg-red-600 text-white rounded-[20px]"
          >
            remove
          </button>
        </div>
      </div>
    </>
  );
}
