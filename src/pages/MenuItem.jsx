import React from "react";
import { IoCartOutline } from "react-icons/io5";


function MenuItem({ imgSrc, title, description, price }) {
  const handleClick= ()=>{
    const item={title:title, description:description, price:price}
  }
  return (
    <div className="menuItem">
      <div className="item__image">
        <img src={imgSrc} alt="" className="itemimg" />
        <IoCartOutline
          className="cart__image"
          onClick={()=>handleClick([imgSrc,title,description,price])}

        />
      </div>
      <h2 className="product__name">{title}</h2>
      <p className="product__description">{description}</p>
      <p className="product__price">{price}</p>
    </div>
  );
}

export default MenuItem;
