import { useDispatch }
from "react-redux";

import { addItem }
from "../redux/CartSlice";

import { useState }
from "react";

const plants = {

 Indoor:[
  {
   id:1,
   name:"Snake Plant",
   price:300,
   img:"https://i.imgur.com/6pKQZ5B.png"
  },

  {
   id:2,
   name:"Peace Lily",
   price:350,
   img:"https://i.imgur.com/PhQ9N6R.png"
  }
 ],

 Medicinal:[

  {
   id:3,
   name:"Tulsi",
   price:150,
   img:"https://i.imgur.com/2DhmtJ4.png"
  },

  {
   id:4,
   name:"Aloe Vera",
   price:250,
   img:"https://i.imgur.com/8zj1YyE.png"
  }

 ],

 Flower:[

  {
   id:5,
   name:"Rose",
   price:200,
   img:"https://i.imgur.com/K8bG8yW.png"
  },

  {
   id:6,
   name:"Mint",
   price:120,
   img:"https://i.imgur.com/k2E9m1B.png"
  }

 ]

};

function ProductList(){

 const dispatch = useDispatch();

 const [added,setAdded] =
 useState([]);

 return(

  <div>

   <h1>Plants 🌿</h1>

   {

    Object.entries(plants)
    .map(([category,items])=>(

     <div key={category}>

      <h2>

       {category}

      </h2>

      {

       items.map(p=>(

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

         disabled={added.includes(p.id)}

         onClick={()=>{

          dispatch(addItem(p));

          setAdded([
           ...added,
           p.id
          ]);

         }}

         >

          Add to Cart

         </button>

        </div>

       ))

      }

     </div>

    ))

   }

  </div>

 );

}

export default ProductList;
