import { BsCart2 } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useRef } from "react";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../style/components/navbar.css";


function Navbar() {
  let navRef = useRef();
  let overlayRef = useRef();
  let navShwer = () => {
    navRef.current.classList.toggle("show");
    overlayRef.current.classList.toggle("show");
  };
  let cart = useSelector((state) => state.cart);
  let price = 0;
  cart.forEach(product => {
    price += product.prod.price * product.counter;
  });
  let productlength = () => {
    let productNum = 0;
    cart.forEach((oneProd) => {
      productNum += oneProd.counter;
    })
    return productNum;
  }
  return (
    <div className="navbar">
      <div className="overlay" ref={overlayRef} onClick={navShwer}></div>
      <div className="container">
        <Logo />
        <div className="toggle">
          <ul ref={navRef}>
            <li><a href="https://www.facebook.com/">everything</a></li>
            <li><a href="https://www.facebook.com/">groceries</a></li>
            <li><a href="https://www.facebook.com/">juice</a></li>
            <li><a href="https://www.facebook.com/">about</a></li>
            <li><a href="https://www.facebook.com/">contact</a></li>
            <AiOutlineClose  className="close-icon"  onClick={navShwer} />
          </ul>
        </div>
        <div className="user-info">
          <div className="price">$<span>{price.toFixed(2)}</span></div>
          <Link to="/cart" className="cart-icon">
            <BsCart2 />
            <span>{productlength()}</span>
          </Link>
          <FaUserAlt className="user-icon" />
        </div>
        <FaBars  className="bars-icon"  onClick={navShwer} />
      </div>
    </div>
  )
}

export default Navbar