import { useSelector,
useDispatch }

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
  state=> state.cart.items
 );

 const dispatch = useDispatch();

 const total =
 items.reduce(

 (sum,item)=>

 sum +
 item.price *
 item.quantity

 ,0);

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

       ₹{item.price}

      </p>

      <p>

       Quantity:
       {item.quantity}

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
       dispatch(
        decreaseQty(item.id)
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

    Total = ₹{total}

   </h2>

   <button>

    Checkout
    (Coming Soon)

   </button>

  </div>

 );

}

export default CartItem;
