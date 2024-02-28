import React from 'react'
import "../style/components/mainbtn.css"
import { BsCart2 } from "react-icons/bs";

function Mainbtn() {
  return (
    <button className='main-btn'>
      <BsCart2 />
      shop now
    </button>
  )
}

export default Mainbtn