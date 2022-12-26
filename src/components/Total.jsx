import React from "react";
import CurrencyFormat from "react-currency-format";
function Total() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div className="total">
            <p className="left__side__text">Subtotal</p>
            <p className="right__side__price">$0</p>
          </div>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <CurrencyFormat
        renderText={(value) => (
          <div className="total">
            <p className="left__side__text">Discount Sales</p>
            <p className="right__side__price">$0</p>
          </div>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <CurrencyFormat
        renderText={(value) => (
          <div className="total">
            <p className="left__side__text">Total sales tax</p>
            <p className="right__side__price">$0</p>
          </div>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <hr className="dashed__line" />
      <CurrencyFormat
        renderText={(value) => (
          <div className="final__total">
            <p className="final__left__side">Subtotal</p>
            <p className="final__right__side">$0</p>
          </div>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="payment__button">Continue to Payment</button>
    </div>
  );
}

export default Total;
