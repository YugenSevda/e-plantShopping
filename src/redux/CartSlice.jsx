import { useSelector, useDispatch }
from "react-redux";

import {
 increaseQty,
 decreaseQty,
 removeItem
}
from "../redux/CartSlice";

function CartItem(){

 const items =
 useSelector(
  state => state.cart.items
 );

 const dispatch = useDispatch();

 // separate function for total calculation
 const calculateTotal = () => {

  return items.reduce(

   (total,item) =>

    total +
    (item.price * item.quantity)

  ,0);

 };

 const handleDecrease = (id, qty) => {

  if(qty === 1){

   dispatch(removeItem(id));

  }
  else{

   dispatch(decreaseQty(id));

  }

 };

 return(

  <div>

   <h1>
    Shopping Cart 🛒
   </h1>

   {

    items.map(item=>(

     <div key={item.id}>

      <img
       src={item.img}
       width="100"
      />

      <h3>
       {item.name}
      </h3>

      <p>
       Price: ₹{item.price}
      </p>

      <p>
       Quantity:
       {item.quantity}
      </p>

      <p>

       Total:

       ₹{item.price * item.quantity}

      </p>

      <button

       onClick={()=>
        dispatch(
         increaseQty(item.id)
        )
       }

      >

       +

      </button>

      <button

       onClick={()=>
        handleDecrease(
         item.id,
         item.quantity
        )
       }

      >

       -

      </button>

      <button

       onClick={()=>
        dispatch(
         removeItem(item.id)
        )
       }

      >

       Delete

      </button>

     </div>

    ))

   }

   <h2>

    Cart Total:
    ₹{calculateTotal()}

   </h2>

   <button

    onClick={()=>

     alert(
      "Coming Soon"
     )

    }

   >

    Checkout

   </button>

  </div>

 );

}

export default CartItem;
