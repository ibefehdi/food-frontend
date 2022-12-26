import React, { useState } from "react";
import BasketItem from "../components/BasketItem";
import Total from "../components/Total";
import { IoSettingsOutline } from "react-icons/io5";
function Basket({item}) {
  const [cartItems, setCardItems] = useState([]);
  
  
  console.log(item)
  return (
    <div className="basket">
      <div className="basket__heading">
        <h1 className="main__heading">Current Order</h1>
        <IoSettingsOutline className="basket__settings__icon" />
      </div>
      {cartItems && cartItems.map((item) => (
        <BasketItem key={item.id} item={item} />
      ))}

      <Total />
    </div>
  );
}

export default Basket;
