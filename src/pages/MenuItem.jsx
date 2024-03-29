import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

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
        quantity: 1,
      },
    });
  };

  return (
    <div className="menuItem" key={id}>
      <div className="item__image">
        <img src={imgSrc} alt="" className="itemimg" />
        <IoCartOutline className="cart__image" onClick={() => addtoBasket()} />
      </div>
      <Link to={`/api/${id}`}>
        <h2 className="product__name">{title}</h2>
      </Link>

      <p className="product__description">{description}</p>
      <p className="product__price">${price}</p>
    </div>
  );
}

export default MenuItem;
