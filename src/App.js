import { BrowserRouter as Router, Routes, Route, Link }
from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function Home(){

 return(

  <div className="home">

   <h1>
    Welcome to Paradise Nursery 🌿
   </h1>

   <Link to="/plants">

    <button>

     Get Started

    </button>

   </Link>

  </div>

 );

}

function App(){

 return(

  <Router>

   <Navbar/>

   <Routes>

    <Route
    path="/"
    element={<Home/>}
    />

    <Route
    path="/plants"
    element={<ProductList/>}
    />

    <Route
    path="/cart"
    element={<CartItem/>}
    />

    <Route
    path="/about"
    element={<AboutUs/>}
    />

   </Routes>

  </Router>

 );

}

export default App;
