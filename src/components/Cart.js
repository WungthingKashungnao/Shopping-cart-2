import React, { useEffect } from "react";
import { useContext } from "react";
import { context } from "./ContextApi";

const Cart = () => {
  const { cart, price, handleRemove, handleChange } = useContext(context);

  return (
    <div className="py-5  container max-w-[600px] mx-auto w-[100%]">
      {cart.map((item) => (
        <div className="px-2 cart_box flex justify-between items-center gap-2 border border-b-[black] my-2">
          <div className="product_item flex flex-col gap-2 flex-wrap">
            <img
              src={item.img}
              alt=""
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
            />
            <p className="1.5rem py-1">{item.title}</p>
          </div>
          <div className="product_controller flex flex-wrap gap-4 ">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleChange(item, +1)}
                className="border border-black px-2 py-1"
              >
                +
              </button>
              <button className="border border-black px-2 py-1">
                {item.amount}
              </button>
              <button
                onClick={() => handleChange(item, -1)}
                className="border border-black px-2 py-1"
              >
                -
              </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <span className="px-2 py-1 bg-emerald-400 text-white">
                Rs {item.price}
              </span>
              <button
                onClick={() => handleRemove(item.id)}
                className="border bg-red-500 text-white px-2 py-1"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex gap-3">
        <span className="text-[1.5rem] text-emerald-400 font-bold">
          Total Price of your cart:
        </span>
        <span className="text-[1.5rem] text-emerald-400 font-bold">
          {price}
        </span>
      </div>
    </div>
  );
};

export default Cart;
