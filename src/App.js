import { Route, Routes } from "react-router-dom";
// import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Products from "./Components/Products";
import Product from "./Components/Product";
// import Orders from "./Components/Orders";
// import Payment from "./Components/Payment";
import PageNotFound from "./Components/Error404";
import PlaceOrder from "./Components/PlaceOrder";
import { useState } from "react";
import Card from "./Components/Card";


const Routing = (props) => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/cards" element={<Card />} />
      <Route exact path="/products/:id" element={<Product setProduct={props.setProduct}/>} />
      <Route exact path="/order-summary/:id" element={<PlaceOrder product={props.product} setProduct={props.setProduct}/>} />


      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

function App() {
  const [product, setProduct] = useState([]);

  return (
    <>
      <Navigation />
      <Routing product={product} setProduct={setProduct} />
    </>

  );
}

export default App;
