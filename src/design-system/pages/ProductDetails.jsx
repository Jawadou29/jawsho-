import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {useDispatch } from "react-redux";
import { addToCart } from "../rtk/slices/cart-slice";
import "../style/pages/productDetails.css";
import Popup from "../components/Popup";
import { AiFillCheckCircle } from "react-icons/ai";


function ProductDetails() {
  let addCheckRef = useRef();
  let param = useParams();
  let [product, setProduct] = useState({});
  let [count, setCount] = useState(1);
  let [popupShow, setPopupShow] = useState(false);
  let dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${param.proid}`)
    .then((res) => res.json())
    .then((data) => setProduct(data));
  })
  return (
    <>
      <div className="notif-add-product" ref={addCheckRef}>
          <AiFillCheckCircle />
          <span>the product added to cart</span>
      </div>
      <Navbar />
      <div className="product-details">
        <div className="container">
          <div className="img">
            <img src={product.image} alt="" />
          </div>
          <div className="text">
            <h1 className="title">{product.title}</h1>
            <h3 className="category">{product.category}</h3>
            <h1 className="price">${product.price}</h1>
            <div className="description">
              <h3>description</h3>
              <p>{product.description}</p>
            </div>
            <div className="count">
              <input type="number" name="num" id="num" min={1} max={400} defaultValue={1} onChange={(e) => setCount(+e.target.value)}/>
            </div>
            <button className="add-cart" onClick={() => {
              setPopupShow(true)
            }}>
              <AiOutlineShoppingCart />
              add to cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <Popup trigger={popupShow}>
        <h2>are you sure you want to add this product to the cart</h2>
        <div className="buttons">
          <button className="yes" onClick={() => {
            dispatch(addToCart({prod: product, counter: count}));
            setPopupShow(false);
            if (addCheckRef.current) {
              addCheckRef.current.style.opacity = 1;
              addCheckRef.current.style.transform = "translate(-50%, 150%)";
              setTimeout(() => {
                addCheckRef.current.style.opacity = 0;
                addCheckRef.current.style.transform = "translate(-50%, 100%)";
              }, 2000);
            }
          }}>yes</button>
          <button className="cancel" onClick={() => setPopupShow(false)}>cancel</button>
        </div>
      </Popup>
    </>
  )
}

export default ProductDetails