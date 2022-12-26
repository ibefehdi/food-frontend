import React from 'react'
import img from "../assets/img/croissant.jpg"
import {AiOutlinePlus , AiOutlineMinus} from 'react-icons/ai'
function BasketItem({item}) {
    console.log(item)
    
  return (
    <div className="item__in__basket">
            <img src={img} className = "basket__img" alt="" />
            <div className="basket__item__details">
                
                <p className="basket__item__name"> {item.name}</p>
                <div className="price__quantity">
                    <p>{item.price}</p>
                    <div className="quantity__signs">
                        <AiOutlinePlus className='sign'/>
                        <p>1</p>
                        <AiOutlineMinus className='sign'/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BasketItem