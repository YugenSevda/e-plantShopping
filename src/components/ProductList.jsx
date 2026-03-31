import { useDispatch }
from "react-redux";

import { addItem }
from "../redux/CartSlice";

const plants = [

{
 id:1,
 name:"Snake Plant",
 price:300,
 img:"https://i.imgur.com/6pKQZ5B.png"
},

{
 id:2,
 name:"Aloe Vera",
 price:250,
 img:"https://i.imgur.com/8zj1YyE.png"
},

{
 id:3,
 name:"Rose",
 price:200,
 img:"https://i.imgur.com/K8bG8yW.png"
},

{
 id:4,
 name:"Tulsi",
 price:150,
 img:"https://i.imgur.com/2DhmtJ4.png"
},

{
 id:5,
 name:"Peace Lily",
 price:350,
 img:"https://i.imgur.com/PhQ9N6R.png"
},

{
 id:6,
 name:"Mint",
 price:120,
 img:"https://i.imgur.com/k2E9m1B.png"
}

];

function ProductList(){

 const dispatch = useDispatch();

 return(

  <div>

   <h1>

    Plants 🌿

   </h1>

   {

    plants.map(p=>(

     <div key={p.id}>

      <img
      src={p.img}
      width="120"
      />

      <h3>

       {p.name}

      </h3>

      <p>

       ₹{p.price}

      </p>

      <button

      onClick={()=>
       dispatch(addItem(p))
      }

      >

       Add to Cart

      </button>

     </div>

    ))

   }

  </div>

 );

}

export default ProductList;
