import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function ProductPage() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const url = "http://localhost:3001/api/" + id;
  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, [data, url]);
  return (
    <div className="product__page">
      {data && (
        <>
          <img className="product__page__image" src={data.data.image.primaryImageID.format.origin.url} alt="" />
          <h2 className="product__page__title">{data.data.engData.title}</h2>
          <p className="product__page__info"> {data.data.engData.description}</p>
          <p className="product__page__price">{"$1"}</p>
          <button className="product__page__button">Buy Now</button>
          
        </>
      )}
    </div>
  );
}

export default ProductPage;
