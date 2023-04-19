import React, { createContext, useEffect, useState } from "react";

export const context = createContext();

export const AppContext = (props) => {
  const [show, setShow] = useState(true); //if show is true show product component, else show cart component
  const [cart, setCart] = useState([]); //cart to store product items
  const [warning, setWarning] = useState(false); //warning to show that same item is present in cart
  const [price, setPrice] = useState(0); //state for product total price

  //run useEffect whenever there is a change to cart
  useEffect(() => {
    handlePrice();
  }, [cart]);

  // function to add items to cart
  const handleClick = (item) => {
    let isPresent = false;

    // code to prevent same items being added in the cart
    // comparing the recently clicked item with the items in the cart
    cart.forEach((product) => {
      if (item.id === product.id) {
        // if the same item is present set it to true
        isPresent = true;
      }
    });

    // to set warning popup functionality
    if (isPresent) {
      setWarning(true);
      // console.log(warning);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    // if the same product is present in the cart return
    if (isPresent) {
      return;
    }

    // if no similar item was found update the cart
    setCart([...cart, item]);
  };

  //function to handle total price
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };

  // function to remove item from cart
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id != id);
    setCart(arr);
  };

  // function to increase or decrease the item in cart
  const handleChange = (item, d) => {
    let ind = -1;
    // here we need index beacuse we need to match the exact item that we click that is in the cart
    cart.forEach((data, index) => {
      // if id from cart and id sent from the user which is also from the cart match then, set the value of index
      if (data.id === item.id) {
        ind = index;
      }
    });

    const tempArr = cart;
    tempArr[ind].amount += d;

    //if we decrease it to the last item in the product, set the product to amount to 1, so that it does not go to zero
    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1;
    }

    setCart([...tempArr]);
  };

  return (
    <context.Provider
      value={{
        show,
        setShow,
        cart,
        setCart,
        handleClick,
        warning,
        price,
        setPrice,
        handlePrice,
        handleRemove,
        handleChange,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
