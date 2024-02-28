import Homepage from "./design-system/pages/Homepage"
import ProductCatgoty from "./design-system/pages/ProductCatgoty";
import { Routes, Route } from "react-router-dom"
import ProductDetails from "./design-system/pages/ProductDetails";
import Checkout from "./design-system/pages/Checkout";
import Scrolltop from "./design-system/Scrolltop";
import Cart from "./design-system/pages/Cart";

function App() {
  return (
    <>
      <Scrolltop />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products/:proid" element={<ProductDetails />} />
        <Route path="/products/category/:procatgory" element={<ProductCatgoty />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App