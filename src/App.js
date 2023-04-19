import { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { useContext } from "react";

import { context } from "./components/ContextApi";

function App() {
  const { show } = useContext(context);
  return (
    <>
      <Navbar />
      {show ? <Product /> : <Cart />}
    </>
  );
}

export default App;
