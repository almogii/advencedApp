
import './App.css';
import { useEffect, useState } from 'react';
// import Product from './components/Product/Product';
import Items from './components/Items/Items'
import axios from 'axios'; 
import Cart from './components/Cart/Cart'


function App() {
 
const [products_arr,setProducts]=useState([])
useEffect(()=>{ 
async function fetching(){
 const res= await axios.get('https://dummyjson.com/products')
 setProducts(res.data.products)
} 
fetching()
 },[])
 
 const func=(index)=>{
 console.log(index +"index print");
 
 
 };
  return (
   <div>
  <Items productsArray={products_arr} func={func}/>
   </div>

    
  );
}

export default App;
