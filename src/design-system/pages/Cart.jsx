import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../style/pages/cart.css";
import { BsFillTrashFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateCounter, clearCart } from "../rtk/slices/cart-slice";
import { useState} from "react";
import Popup from "../components/Popup";

function Cart() {
  let cartProducts = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  let [productsChanged, setProductChanged] = useState([]);
  let [popupShow, setPopupShow] = useState(false);
  let [productRemoved, setProductRemoved] = useState();
  let productPrices = () => {
    let price = 0;
    cartProducts.forEach(product => {
      price += product.prod.price * product.counter;
    });
    return price;
  }
  let showPopupFunction = (product) => {
    setPopupShow(true);
    setProductRemoved(product)
  };
  let countChangeFunction = (e, product) => {
    let check = false;
    productsChanged.forEach((productc) => {
      if (product.prod.id === productc.id) {
        check = true;
      }
    })
    if (check === false) {
      productsChanged.push({id: product.prod.id, newCounter: e.target.value});
      check = true;
    }
    else{
      productsChanged.forEach((prodcutc) => {
        if (prodcutc.id === product.prod.id) {
          prodcutc.newCounter = e.target.value;
        }
      })
    }
  };
  let clearCartFunction = () => {
    dispatch(clearCart())
  };
  let updateCartFunction = () => {
    productsChanged.forEach((prodch) => {
      if (+prodch.newCounter === 0) {
        cartProducts.forEach((cartprod) => {
          if (prodch.id === cartprod.prod.id) {
            dispatch(removeFromCart(cartprod))
          }
        })
      }
    })
    dispatch(updateCounter(productsChanged));
    setProductChanged([]);
  }
  return (
    <>
      <Navbar />
      <div className="cart">
        <div className="container">
          <table>
            <thead>
              <tr>
                <td></td>
                <td></td>
                <td>title</td>
                <td>price</td>
                <td>count</td>
                <td>total price</td>
              </tr>
            </thead>
            <tbody>
              {
                cartProducts.map((product) => (
                  <tr key={product.prod.id}>
                    <td className="trash" key={product.prod.id}><BsFillTrashFill onClick={() => showPopupFunction(product) } /></td>
                    <td className="img">
                      <Link to={`/products/${product.prod.id}`}><img src={product.prod.image} alt="imgae" /></Link>
                    </td>
                    <td className="title" title={product.prod.title}><Link className="link" to={`/products/${product.prod.id}`}>{product.prod.title.slice(0, 20)}...</Link></td>
                    <td className="price">${product.prod.price}</td>
                    <td className="counter"><input type="number" name="num" id="num" defaultValue={product.counter} onChange={(e) => {countChangeFunction(e, product)}}/></td>
                    <td className="total-price">${ product.prod.price * product.counter }
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <div className="btns">
            <button className={`clear-cart ${cartProducts.length === 0? "empty" : ""}`} onClick={clearCartFunction}>clear cart</button>
            <button className={`updateInfo ${cartProducts.length === 0? "empty" : ""}`} onClick={updateCartFunction}>update info</button>
          </div>
        </div>
      </div>
      <div className="cart-total">
        <div className="container">
          <div className="cart-total-inner">
          <h2>cart total</h2>
            <table>
              <tbody>
                <tr>
                  <td>subtotal</td>
                  <td>${productPrices()}</td>
                </tr>
                <tr>
                  <td>total</td>
                  <td>${productPrices()}</td>
                </tr>
              </tbody>
            </table>
          <Link to="/checkout" className="checkout">PROCEED TO CHECKOUT</Link>
          </div>
        </div>        
      </div>
      <Footer />
      <Popup trigger={popupShow}>
        <h2>are you sure you want to add this product to the cart</h2>
        <div className="buttons">
          <button className="yes" onClick={() => {
            dispatch(removeFromCart(productRemoved))
            setPopupShow(false);
          }}>yes</button>
          <button className="cancel" onClick={() => setPopupShow(false)}>cancel</button>
        </div>
      </Popup>
    </>
  )
}

export default Cart