import Logo from "./Logo"
import googlePlay from "../imgs/google-play.png";
import appStore from "../imgs/app-store.png";
import "../style/components/footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="one">
            <Logo />
            <p>
              Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit,
              ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.
            </p>
          </div>
          <div className="two">
            <div className="quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="https://www.facebook.com/">about</a></li>
                <li><a href="https://www.facebook.com/">cart</a></li>
                <li><a href="https://www.facebook.com/">checkout</a></li>
                <li><a href="https://www.facebook.com/">contact</a></li>
                <li><a href="https://www.facebook.com/">home</a></li>
                <li><a href="https://www.facebook.com/">my account</a></li>
                <li><a href="https://www.facebook.com/">shop</a></li>
              </ul>
            </div>
            <div className="site-links">
              <h3>site links</h3>
              <ul>
                <li><a href="https://www.facebook.com/">Privacy Policy</a></li>
                <li><a href="https://www.facebook.com/">Shipping Details</a></li>
                <li><a href="https://www.facebook.com/">Offers Coupons</a></li>
                <li><a href="https://www.facebook.com/">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="three">
            <div className="download">
              <h3>Download Our Mobile App</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin.
                Praesent porta enim mi, non tincidunt libero interdum sit amet.
              </p>
            </div>
            <div className="quick-links2">
              <h3>quick links</h3>
              <ul>
                <li><a href="https://www.facebook.com/">Know More About Us</a></li>
                <li><a href="https://www.facebook.com/">Visit Store</a></li>
                <li><a href="https://www.facebook.com/">Let’s Connect</a></li>
                <li><a href="https://www.facebook.com/">Locate Stores</a></li>
              </ul>
            </div>
            <div className="stores">
              <a href="https://www.facebook.com/">
                <img src={googlePlay} alt="" />
              </a>
              <a href="https://www.facebook.com/">
                <img src={appStore} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div>Copyright © 2023 | Organic Store</div>
          <div className="social-media">
            <a href="https://www.facebook.com/"><BsFacebook /></a>
            <a href="https://www.facebook.com/"><BsInstagram /></a>
            <a href="https://www.facebook.com/"><AiOutlineTwitter /></a>
            <a href="https://www.facebook.com/"><AiFillLinkedin /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer