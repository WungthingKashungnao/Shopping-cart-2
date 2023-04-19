import React from "react";
import list from "../data";
import Cards from "./Cards";

const Product = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5">
      {list.map((item, idx) => (
        <Cards item={item} key={idx} />
      ))}
    </section>
  );
};

export default Product;
