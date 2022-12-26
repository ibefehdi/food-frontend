import React,{useState} from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useStateValue } from "../StateProvider";
function BasketItem({ id, title, imgSrc, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const [quantity,setQuantity] = useState(1);
  

  
  const decrement = ()=>{
    if (quantity===1){
      dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id
    })
    }
    else{
      setQuantity(quantity-1);

    }
    
  }
  return (
    <div className="item__in__basket" key={id}>
      <img src={imgSrc} className="basket__img" alt="" />
      <div className="basket__item__details">
        <p className="basket__item__name"> {title}</p>
        <div className="price__quantity">
          <p>${price}</p>
          <div className="quantity__signs">
            <AiOutlinePlus className="sign" onClick={() => setQuantity(quantity+1)} />
            <p>{quantity}</p>
            <AiOutlineMinus className="sign" onClick={()=>decrement()} />
          </div>
        </div>
      </div>
    </div>
  );
  }

export default BasketItem;
