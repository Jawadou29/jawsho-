import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from "../rtk/slices/products-slice";
import ProductCart from '../components/ProductCart';
import MainTitle from '../components/MainTitle';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ProductCatgoty() {
  const params = useParams();
  let [sortEle , setSortEle] = useState("default");
  let [allProds, setAllProds] = useState([]);
  useEffect(() => {
    if (sortEle === "rating" || sortEle === "propularity") {
      fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        return data.sort((a, b) => {
          return b.rating.rate - a.rating.rate;
        })
      })
      .then((data) => setAllProds(data))
    }
    else if (sortEle === "low") {
      fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        return data.sort((a, b) => {
          return a.price - b.price;
        })
      })
      .then((data) => setAllProds(data))
    }
    else if (sortEle === "hight") {
      fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        return data.sort((a, b) => {
          return b.price - a.price;
        })
      })
      .then((data) => setAllProds(data))
    }
    else{
      fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setAllProds(data))
    }
  }, [sortEle])
  return (
    <>
      <Navbar />
      <div className='product-container'>
        <MainTitle mtitle={params.procatgory} />
        <div className="container container-one">
          <div className="search-field">
            <input type="text" placeholder='search for product' />
          </div>
          <select name="select" id="select" onChange={(e) => setSortEle(e.target.value)}>
            <option value="default">default sorting</option>
            <option value="propularity">sort by propularity</option>
            <option value="rating">sort by average rating</option>
            <option value="latest">sort by latest</option>
            <option value="low">sort by price: low to hight</option>
            <option value="hight">sort by price: hight to low</option>
          </select>
        </div>
        <div className="container container-two">
            {
              allProds.map((product) => {
                let ele;
                if (params.procatgory == "all") {
                  ele = (
                    <ProductCart image={product.image} category={product.category} title={product.title} price={product.price} key={product.id} id={product.id} rating={product.rating.rate} />
                  )
                }
                else{
                  if (product.category === params.procatgory) {
                    ele = (
                      <ProductCart image={product.image} category={product.category} title={product.title} price={product.price} key={product.id} id={product.id} rating={product.rating.rate} />
                    )
                  }
                }
                return ele;
              })
            }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductCatgoty