import React from 'react'
import { AiTwotoneStar } from 'react-icons/ai'
import "../style/components/reviews.css";

function Reviews(props) {
  return (
    <div className="customer-review">
      <div className="stars">
        <AiTwotoneStar />
        <AiTwotoneStar />
        <AiTwotoneStar />
        <AiTwotoneStar />
        <AiTwotoneStar />
      </div>
      <p>
        {props.children}
      </p>
      <div className="person">
        <img src={props.image} alt="" />
        <h3 className='name'>{props.name}</h3>
      </div>
    </div>
  )
}

export default Reviews