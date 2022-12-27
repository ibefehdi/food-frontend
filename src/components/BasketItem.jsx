import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useStateValue } from "../StateProvider";
import Total from "./Total";
function BasketItem({ id, title, imgSrc, price,quantity}) {
  const [{ basket }, dispatch] = useStateValue();
  const [quantityState, setQuantity] = useState(quantity);
  const [priceState, setPriceState] = useState(price);

  const increment = () => {
    
    
    setQuantity(quantityState + 1);
    setPriceState((prevValue) => prevValue + price);
    dispatch({ type: "INCREMENT", id });
    
    
  };

  const decrement = () => {
    if (quantityState === 1) {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    } else {
      setQuantity(quantityState - 1);
      setPriceState((prevValue) => prevValue - price);
    }
  };
  return (
    <div className="item__in__basket" key={id}>
      <img src={imgSrc} className="basket__img" alt="" />
      <div className="basket__item__details">
        <p className="basket__item__name"> {title}</p>
        <div className="price__quantity">
          <p className="price">${priceState}</p>
          <div className="quantity__signs">
            <AiOutlinePlus className="sign" onClick={() => increment()} />
            <p className="quantity">{quantityState}</p>
            <AiOutlineMinus className="sign" onClick={() => decrement()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
