import { BrowserRouter as Router, Routes, Route }
from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function App(){

 return(

  <Router>

   <Navbar/>

   <Routes>

    <Route
    path="/"
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
