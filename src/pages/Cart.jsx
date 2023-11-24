import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <h1 className="cartText">my cart</h1>
      <div className="flex gap-10 m-20">
        {cartItems.map((el) => (
          <CartProd key={el.id} data={el} />
        ))}
      </div>
    </>
  );
};
function CartProd({ data }) {
  const { removeCart } = useContext(CartContext);
  return (
    <>
      <div className="w-[220px] h-[340px] flex flex-col justify-between shadow-md p-2 mb-6  rounded-[20px] ">
        <img src={data.images[0]} alt="images" />
        <h1 className="text-blue-300">{data.title}</h1>
        <h2 className="text-gray-400">{data.brand}</h2>
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
