import React from "react";

import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
function Total() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <div className="total">
        <p className="left__side__text">Subtotal</p>
        <p className="right__side__price">$0</p>
      </div>

      <div className="total">
        <p className="left__side__text">Discount Sales</p>
        <p className="right__side__price">$0</p>
      </div>

      <div className="total">
        <p className="left__side__text">Total sales tax</p>
        <p className="right__side__price">$0</p>
      </div>

      <hr className="dashed__line" />

      <div className="final__total">
        <p className="final__left__side">Subtotal</p>
        <p className="final__right__side">{"$"+ getBasketTotal(basket)}</p>
      </div>

      <button className="payment__button">Continue to Payment</button>
    </div>
  );
}

export default Total;
