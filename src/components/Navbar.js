import React from "react";
import { useContext } from "react";
import { context } from "./ContextApi";

const Navbar = () => {
  const { cart, show, setShow } = useContext(context);
  return (
    <nav>
      <div className="nav_box flex justify-between items-center bg-emerald-500 py-5 px-5">
        <span
          onClick={() => setShow(true)}
          className="my_shop text-[1.5rem] md:text-[2rem] font-bold text-white"
        >
          My shopping Cart
        </span>
        <div className="cart relative">
          <span
            onClick={() => setShow(!show)}
            className=" cart text-[1.5rem] md:text-[2rem] font-bold text-white"
          >
            <i className="ri-shopping-cart-fill"></i>
          </span>
          <span className="absolute bg-red-600 text-white px-2 py-1 left-[-30px]">
            {cart.length}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
