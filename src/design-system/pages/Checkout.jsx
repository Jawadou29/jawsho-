import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRef } from "react";
import "../style/pages/checkout.css";

function Checkout() {
  let [countries, setCountries] = useState([]);
  let inputRef = useRef();
  let dropDownRef = useRef();
  let dropDownRef2 = useRef();
  let cartContent = useSelector((state) => state.cart);
  let totalPrice = () => {
    let price = 0;
    cartContent.forEach(product => {
      price += product.prod.price * product.counter;
    });
    return price;
  };
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => setCountries(data));
  }, [])
  return (
    <>
      <Navbar />
      <div className="checkout">
        <div className="container">
          <h1>checkout</h1>
          <div className="header">
            <div className="have-coupeon">
              <AiFillCodeSandboxSquare />
              <div>
                have a coupeon? 
                <span onClick={() => {
                  inputRef.current.classList.toggle("show")
                }}> click here to enter your code</span>
              </div>
            </div>
            <div className="code-input" ref={inputRef}>
              <p>If you have a coupon code, please apply it below.</p>
              <div className="input">
                <input type="text" placeholder="coupon code" />
                <button className="apply-code">apply code</button>
              </div>
            </div>
          </div>
          <div className="billing-order">
            <div className="billing">
              <h3>billing details</h3>
              <form action="">
                <div className="flname">
                  <div className="field">
                    <label htmlFor="fname">first name</label>
                    <input type="text" id="fname" />
                  </div>
                  <div className="field">
                    <label htmlFor="lname">last name</label>
                    <input type="text" id="lname" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="company">Company name (optional)</label>
                  <input type="text" id="company" />
                </div>
                <div className="field">
                  <label htmlFor="contry">Country / Region </label>
                  <select name="contry" id="contry">
                    {
                      countries.map((contry, index) => (
                        <option key={index} value={contry.name.common}>{contry.name.common}</option>
                      ))
                    }
                    {/* <option value="morocco">morocco</option>
                    <option value="usa">usa</option>
                    <option value="egypt">egypt</option> */}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="street">Street address</label>
                  <input type="text" id="street" placeholder="house number and street name"/>
                  <input type="text" id="street" className="secin" placeholder="apartment, suite, unite, etc (optional)"/>
                </div>
                <div className="field">
                  <label htmlFor="town">Town / City</label>
                  <input type="text" id="town" />
                </div>
                <div className="field">
                  <label htmlFor="state">State / County</label>
                  <input type="text" id="town" />
                </div>
                <div className="field">
                  <label htmlFor="zip">postcode / zip</label>
                  <input type="text" id="zip" />
                </div>
                <div className="add-info">
                  <h3>additional information</h3>
                  <div className="field">
                    <label htmlFor="notes-order">irder notes (optional)</label>
                    <input type="text" placeholder="notes about your order, e.g. special notes for delivery" />
                  </div>
                </div>
              </form>
            </div>
            <div className="order">
              <h3>your order</h3>
              <div className="content">
                <div className="title row">
                  <h4>product</h4>
                  <h4>Subtotal</h4>
                </div>
                {
                  cartContent.map((product, i) => (
                    <div className="row" key={i}>
                      <span>{product.prod.title} x {product.counter}</span>
                      <span>${product.prod.price * product.counter}</span>
                    </div>
                  ))
                }
                <div className="row">
                  <span>Subtotal</span>
                  <span>${totalPrice()}</span>
                </div>
                <div className="row">
                  <span>total</span>
                  <span>${totalPrice()}</span>
                </div>
                <div className="how-pay">
                  <div className="field">
                    <input type="radio"  id="payment" name="rad" onChange={(e) => {
                      if (e.target.checked) {
                        dropDownRef.current.classList.add("show");
                        dropDownRef2.current.classList.remove("show")
                      }
                    }}/>
                    <label htmlFor="payment"> Check payments</label>
                  </div>
                  <div className="dropdown" ref={dropDownRef}>
                    <div className="somet">
                      <div className="box">
                        Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <input type="radio"  id="cash" name="rad" onChange={(e) => {
                      if (e.target.checked) {
                        dropDownRef2.current.classList.add("show");
                        dropDownRef.current.classList.remove("show");
                      }
                    }}/>
                    <label htmlFor="cash"> Cash on delivery</label>
                  </div>
                  <div className="dropdown" ref={dropDownRef2}>
                    <div className="somet">
                      <div className="box">
                        Pay with cash upon delivery.
                      </div>
                    </div>
                  </div>
                  <button className="place-order">place order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Checkout