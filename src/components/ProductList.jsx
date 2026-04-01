import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList(){

 const dispatch = useDispatch();

 const [added,setAdded] = useState({});

 const plants = {

  Indoor:[
   {id:1,name:"Snake Plant",price:10,img:"https://i.imgur.com/1.jpg"},
   {id:2,name:"Peace Lily",price:12,img:"https://i.imgur.com/2.jpg"},
   {id:3,name:"Spider Plant",price:8,img:"https://i.imgur.com/3.jpg"},
   {id:4,name:"Aloe Vera",price:9,img:"https://i.imgur.com/4.jpg"},
   {id:5,name:"Rubber Plant",price:15,img:"https://i.imgur.com/5.jpg"},
   {id:6,name:"ZZ Plant",price:18,img:"https://i.imgur.com/6.jpg"}
  ],

  Medicinal:[
   {id:7,name:"Tulsi",price:7,img:"https://i.imgur.com/7.jpg"},
   {id:8,name:"Mint",price:6,img:"https://i.imgur.com/8.jpg"},
   {id:9,name:"Neem",price:11,img:"https://i.imgur.com/9.jpg"},
   {id:10,name:"Ashwagandha",price:14,img:"https://i.imgur.com/10.jpg"},
   {id:11,name:"Brahmi",price:13,img:"https://i.imgur.com/11.jpg"},
   {id:12,name:"Giloy",price:16,img:"https://i.imgur.com/12.jpg"}
  ],

  Flower:[
   {id:13,name:"Rose",price:5,img:"https://i.imgur.com/13.jpg"},
   {id:14,name:"Tulip",price:9,img:"https://i.imgur.com/14.jpg"},
   {id:15,name:"Sunflower",price:7,img:"https://i.imgur.com/15.jpg"},
   {id:16,name:"Lily",price:8,img:"https://i.imgur.com/16.jpg"},
   {id:17,name:"Daisy",price:6,img:"https://i.imgur.com/17.jpg"},
   {id:18,name:"Orchid",price:20,img:"https://i.imgur.com/18.jpg"}
  ]

 };

 function handleAdd(plant){

  dispatch(addItem(plant));

  setAdded({
   ...added,
   [plant.id]:true
  });

 }

 return(

  <div>

   {Object.entries(plants).map(([category,list])=>(

    <div key={category}>

     <h2>{category} Plants</h2>

     <div style={{display:"flex",gap:"20px"}}>

      {list.map((plant)=>(

       <div key={plant.id}>

        <img src={plant.img} width="120"/>

        <h4>{plant.name}</h4>

        <p>${plant.price}</p>

        <button
         disabled={added[plant.id]}
         onClick={()=>handleAdd(plant)}
        >

         {added[plant.id] ? "Added to Cart" : "Add to Cart"}

        </button>

       </div>

      ))}

     </div>

    </div>

   ))}

  </div>

 );

}

export default ProductList;
