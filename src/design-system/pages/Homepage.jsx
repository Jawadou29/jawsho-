// components
import MainTitle from "../components/MainTitle";
import Mainbtn from "../components/Mainbtn";
import Reviews from "../components/Reviews";
import ProductCart from "../components/ProductCart";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// style
import "../style/pages/homepage.css";

// images
import client1 from "../imgs/client1.png"
import client2 from "../imgs/client2.png"
import landingImg from "../imgs/People buying school supplies-cuate.svg"

// hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// data
import { landingInfo } from "../data";
import { services } from "../data";
import { fetchProducts } from "../rtk/slices/products-slice";

// icons


function Homepage() {
  let dispatch = useDispatch();
  let [categories, setCategories] = useState([]);
  let allProds = useSelector((state) => state.products);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) =>  setCategories( data));
    dispatch(fetchProducts());
  }, [])
  return (
    <>
      <Navbar />
      {/* start landing */}
      <div className="landing">
        <div className="container">
          <div className="img">
            <img src={landingImg} alt="laning img" />
          </div>
          <div className="text">
            <h3>{landingInfo.h3}</h3>
            <h1>{landingInfo.h1} </h1>
            <p>{landingInfo.p}</p>
            <Mainbtn />
          </div>
        </div>
      </div>
      {/* end landing */}
      {/* start services */}
      <div className="services">
        <div className="container">
          {
            services.map((serv) => (
              <div className="box" key={serv.id}>
                {serv.icon}
                <div className="text">
                  <h3>{serv.title}</h3>
                  <p>{serv.des}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      {/* end services */}
      {/* start categories */}
      <div className="categories">
        <MainTitle mtitle="all our categories" />
        <div className="container">
        <Link to="/products/category/all" key={"all"} className="all">
            <span>all</span>
          </Link>
          {
            categories.map((category, index) => (
              <Link  key={index} to={`/products/category/${category}`}>
                <span>{category}</span>
              </Link>
            ))
          }
        </div>
      </div>
      {/* end categories */}
      {/* start trending products */}
      <div className="product-container">
        <MainTitle mtitle="our trending products" />
        <div className="container container-two">
          {
            allProds.map((product) => {
              let ele;
              if (product.rating.rate > 4.6) {
                ele = (
                  <ProductCart image={product.image} category={product.category} title={product.title} price={product.price} key={product.id} id={product.id} />
                )
              }
              return ele;
            })
          }
        </div>
      </div>
      {/* end trending products */}
      {/* start offer */}
      <div className="offer">
        <div className="partone">
          <div className="container">
            <h1>Get 25% Off On Your First Purchase!</h1>
            <Mainbtn />
          </div>
        </div>
        <h2>Try It For Free. No Registration Needed.</h2>
      </div>
      {/* end offer */}
      {/* start Reviews */}
      <div className="reviews">
        <MainTitle mtitle="Customers Reviews" />
        <div className="container">
          <Reviews image={client1} name="Mila Kunis">
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </Reviews>
          <div className="deal">
            <div className="text">
              <h1>Deal Of The Day 15% Off On All Vegetables!</h1>
              <p>I am text block. Click edit button to change this tex em ips.</p>
              <Mainbtn />
            </div>
          </div>
          <Reviews image={client2} name="Mike Sendler">
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </Reviews>
        </div>
      </div>
      {/* end Reviews */}
      {/* start clients */}
      <div className="clients">
        <div className="container">
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-4.svg" alt="" />
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-5.svg" alt="" />
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg" alt="" />
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-3.svg" alt="" />
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg" alt="" />
        </div>
      </div>
      {/* end clients */}
      <Footer />
    </>
  )
}

export default Homepage