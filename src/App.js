
import './App.css';
import { useEffect, useState } from 'react';
// import Product from './components/Product/Product';
import Items from './components/Items/Items'
import axios from 'axios'; 


function App() {
 
const [products_arr,setProducts]=useState([])
useEffect(()=>{ 
async function fetching(){
 const res= await axios.get('https://dummyjson.com/products')
 setProducts(res.data.products)
} 
fetching()
 },[])
 
  return (
   <div>
  <Items productsArray={products_arr}/>
   </div>
    
  );
}

export default App;
