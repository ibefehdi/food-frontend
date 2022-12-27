import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import img from "../assets/img/croissant.jpg";
import hamImg from "../assets/img/hamcroissant.jpg";
import turkImg from "../assets/img/turkeycrossaint.jpg";
import tenderImage from "../assets/img/tendercroissant.jpg";
import chocolateImage from "../assets/img/chocolate.jpg";
import  axios  from "axios";

function MenuList(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api')
      .then(response => {
        setData(response.data);
        // console.log(data.items[0].engData.title)
        
      });
  }, [data]);
  if (props.menuName === "#croissant") {
    return (
      <div className="grid">
        <MenuItem
          id={2}
          title={"Almond Brown Sugar Croissant"}
          imgSrc={img}
          description={"Sweet croissant with topping almonds and brown sugar."}
          price={3}
          quantity={1}
        />
        <MenuItem
          id={3}
          title={"Cheese and Ham Croissant"}
          imgSrc={hamImg}
          description={"A Croissant with with delicious cheese and ham."}
          price={7}
          quantity={1}
        />
        <MenuItem
          id={4}
          title={"Turkey and Cheese Croissant"}
          imgSrc={turkImg}
          description={"A Croisant with turkey, veggies and cheese."}
          price={6}
        />
        <MenuItem
          id={5}
          title={"Smoke Tenderloin Sliced Croissant"}
          imgSrc={tenderImage}
          description={"Smoked Croissant with sliced tenderloin steak. "}
          price={10}
        />
        <MenuItem
          id={6}
          title={"Chocolate Croissant with Powdered Sugar"}
          imgSrc={chocolateImage}
          description={"Sweet croissant with a delicious Nutella filling."}
          price={5}
        />
      </div>
    );

    } else if(props.menuName==="#signature"){
      return(
        <div className="grid">
         {data&&data.items.map(item=>
          <MenuItem 
          id={item._id}
          title={item.engData.title}
          description={item.engData.description.substring(0,80)+"..."}
          price={1}
          imgSrc={item.image.primaryImageID.format.origin.url}
          
          />
         )}
        </div>
      )
    }
  }


export default MenuList;
