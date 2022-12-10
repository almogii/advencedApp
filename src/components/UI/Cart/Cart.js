import React from 'react';
import Product from '../../Product/Product';
import Button from 'react-bootstrap/esm/Button';
import './cart.css'
import { useNavigate } from "react-router-dom";


const Cart = () => {
let itemsInCart=[];//save the data into arr
let total_price=0;
let itemId;
let btn;

const navigate=useNavigate();
//when clicking on to cart check if the amount of user clicks on sirtain product is bigger then 0 if yes we print the relevent product to console
if(localStorage.getItem("productAmount")){
  itemsInCart=JSON.parse(localStorage.getItem("productAmount")).filter(
    (item) => item.amountOfClicks > 0
  );
}
console.log("cart items", itemsInCart);

const handleChangeOfAmount= async (item_id,NewamountOfClicks)=>{
  console.log("handle add or sub",item_id,NewamountOfClicks);
  if(itemsInCart.length!==0){
  itemId=item_id
   itemsInCart[item_id].amountOfClicks= NewamountOfClicks;
   btn=NewamountOfClicks;

  }
  console.log("items afther adding",itemsInCart);
}

const handleSubmit=(e)=>{
  localStorage.setItem('isShopping',false)
  localStorage.removeItem("productAmount")

}

  return (
    <div>
      <h1>Items at your cart</h1>
      <div>
        {itemsInCart.length>0 &&
        itemsInCart.map((p,index)=>{
          total_price+=p.price*p.amountOfClicks;
          return(
              <div>
              <p>{`product name : ${p.title}`}</p>
              <img className='product-img' src={p.images[0]}></img>
              <Button
                        variant="light"
                        onClick={() =>
                          handleChangeOfAmount(index, p.amountOfClicks - 1)
                        }
                        disabled={p.amountOfClicks === 0}
                      > -
                        <i className="fas fa-minus-circle"></i>
                      </Button>{' '}
                     
                      <Button
                        variant="light"
                         onClick={() =>
                          handleChangeOfAmount(index, p.amountOfClicks + 1)
                        }
                        
                        disabled={p.amountOfClicks ===20}
                      >+
                        <i className="fas fa-plus-circle"></i>
                    </Button>
                    
                    <p>{`Total price: ${p.amountOfClicks} X ${p.price}$ = ${
                  p.amountOfClicks * p.price
                }$`}</p>

              </div>
             
          );
        })}
      </div>

      <p>total cart price is:{total_price}$</p>
      <p>
      <button onClick={()=>navigate("/")}>continue shopping</button>
      <button onSubmit={handleSubmit}>submit</button>
    
      </p>
    </div>
  );
};


export default Cart