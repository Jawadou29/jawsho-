import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
import "../style/components/product-cart.css";
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';


function ProductCart(props) {
  return (
    <Link to={`/products/${props.id}`} className="cart">
      <img src={props.image} alt="" />
      <h4>{props.category}</h4>
      <h3>{props.title.slice(0, 20)}</h3>
      <div className="stars">
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </div>
      <div className="price-rating">
        <div className="rating">{props.rating} <AiFillStar /></div>  
        <div className="price">${props.price}</div>
      </div>
    </Link>
  )
}

export default ProductCart