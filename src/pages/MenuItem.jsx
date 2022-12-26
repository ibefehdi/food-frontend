import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useStateValue } from "../StateProvider";

function MenuItem({ id, imgSrc, title, description, price }) {
  const [state, dispatch] = useStateValue();
  const addtoBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        description: description,
        price: price,
        imgSrc: imgSrc,
      },
    });
  };

  return (
    <div className="menuItem" key={id}>
      <div className="item__image">
        <img src={imgSrc} alt="" className="itemimg" />
        <IoCartOutline className="cart__image" onClick={() => addtoBasket()} />
      </div>
      <h2 className="product__name">{title}</h2>
      <p className="product__description">{description}</p>
      <p className="product__price">${price}</p>
    </div>
  );
}

export default MenuItem;
