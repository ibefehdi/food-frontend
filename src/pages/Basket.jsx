import React, { useState } from "react";
import BasketItem from "../components/BasketItem";
import Total from "../components/Total";
import { IoSettingsOutline } from "react-icons/io5";
import { useStateValue } from "../StateProvider";
function Basket() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="basket">
      <div className="basket__heading">
        <h1 className="main__heading">Current Order</h1>
        <IoSettingsOutline className="basket__settings__icon" />
      </div>
      {basket &&
        basket.map((item) => (
          <BasketItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            imgSrc={item.imgSrc}
            quantity={1}
            dispatch={dispatch}
            
          />
        ))}

      <Total />
    </div>
  );
}

export default Basket;
