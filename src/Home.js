import React, { useState } from 'react'
import data from './assets/product.json'
import { Product } from './Product';
import "./Home.css";


  const Home=()=>{
    const[products]=useState(data);
  return (
    <div id='Home' className='Product-container'>
        
        {products.map((product)=>(

            <Product key={product.id}
             product={product}/>
            
        ))}
    </div>
  )
}
export default Home