import { Link }
from "react-router-dom";

import { useSelector }
from "react-redux";

function Navbar(){

 const items =
 useSelector(
  state=> state.cart.items
 );

 const count =
 items.reduce(

 (total,item)=>
 total + item.quantity

 ,0);

 return(

  <div>

   <Link to="/">
    Home
   </Link>

   {" | "}

   <Link to="/plants">
    Plants
   </Link>

   {" | "}

   <Link to="/cart">

    Cart 🛒 ({count})

   </Link>

  </div>

 );

}

export default Navbar;
