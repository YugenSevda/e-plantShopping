import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem(){

 const cartItems = useSelector(
  state => state.cart.cartItems
 );

 const dispatch = useDispatch();

 function increaseQty(id){

  dispatch(
   updateQuantity({
    id:id,
    amount:1
   })
  );

 }

 function decreaseQty(id){

  dispatch(
   updateQuantity({
    id:id,
    amount:-1
   })
  );

 }

 function handleRemove(id){

  dispatch(removeItem(id));

 }

 function totalAmount(){

  return cartItems.reduce(

   (total,item)=>

   total + item.price*item.quantity,

   0

  );

 }

 function handleCheckout(){

  alert("Checkout Successful 🪴");

 }

 return(

  <div>

   <h2>Shopping Cart</h2>

   {cartItems.map((item)=>(

    <div key={item.id}>

     <img
      src={item.img}
      width="120"
     />

     <h4>{item.name}</h4>

     <p>Price: ${item.price}</p>

     <p>Quantity: {item.quantity}</p>

     <p>

      Total:

      ${item.price*item.quantity}

     </p>

     <button

      onClick={()=>
       increaseQty(item.id)
      }

     >

      +

     </button>

     <button

      onClick={()=>
       decreaseQty(item.id)
      }

     >

      -

     </button>

     <button

      onClick={()=>
       handleRemove(item.id)
      }

     >

      Delete

     </button>

    </div>

   ))}

   <h3>

    Grand Total:

    ${totalAmount()}

   </h3>

   <button

    onClick={handleCheckout}

   >

    Checkout

   </button>

   <br/><br/>

   <Link to="/plants">

    <button>

     Continue Shopping

    </button>

   </Link>

  </div>

 );

}

export default CartItem;
