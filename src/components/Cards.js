import React from "react";
import { useContext } from "react";

import { context } from "./ContextApi";

const Cards = (item) => {
  const { handleClick, warning, cart } = useContext(context);
  return (
    <div className=" relative card_box flex flex-col flex-wrap justify-center items-center text-center my-3 py-2 border hover:shadow-2xl">
      <div>
        <img
          src={item.item.img}
          alt=""
          className=" w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]"
        />
      </div>
      <div>
        <p>{item.item.title}</p>
        <p>{item.item.author}</p>
        <p>Rs {item.item.price}</p>
        <button
          onClick={() => handleClick(item.item)}
          className="py-1 px-2 border bg-emerald-500 text-white"
        >
          Add To Cart
        </button>
      </div>

      {warning && (
        <div className="absolute top-4 left-4 bg-red-500 text-white py-4 px-2 text-[1.5rem]">
          Same Product Already Present In Cart
        </div>
      )}
    </div>
  );
};

export default Cards;
