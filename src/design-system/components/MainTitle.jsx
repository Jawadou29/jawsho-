import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import "../style/components/maintitle.css"

function MainTitle(props) {
  return (
    <div className="maintitle">
      <FaCartPlus />
      <span>{props.mtitle}</span>
      <FaCartPlus />
    </div>
  )
}

export default MainTitle