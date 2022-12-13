

import './App.css';
import { useEffect, useState } from 'react';
import Items from './components/UI/Items/Items'
import axios from 'axios'; 




function App() {
// useState in order to fetch data from external api 
const [products_arr,setProducts]=useState([])
//using useeffect hook 
useEffect(()=>{ 
async function fetchingProducts(){
 const res= await axios.get('https://dummyjson.com/products')
 //adding an atribute to all of the products in the array called 'amountOfClicks' and make it equal to 0 
 let res1=res.data.products.map((item)=>{
    return{amountOfClicks:0,...item}
  })
  //using localStorage in order to catch user amount of clicks on every single item 
  //if dosent exist creating localStorege 
 if(!localStorage.getItem("productAmount")){
  localStorage.setItem("productAmount",JSON.stringify(res1))
 }
 //if exist we use setter(weve created to set the products afther filtering it in res1)
 else{
  setProducts(res1)
 }

} 
fetchingProducts()
 },[])
  return (
    <div className='super-div'>
    <Items productsArray={products_arr} />
    </div>
  );
}

export default App;
