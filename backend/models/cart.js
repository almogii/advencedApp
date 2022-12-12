import mongoose from "mongoose";

const newCart =new mongoose.Schema(
    {
        id:{type:String},
       items:{
        type:[ {
            title:{ type: String, required: true },
            price:{ type: Number, required: true },
           amount:{ type: Number, required: true }
        }     
      ]
    } 
    });
const Product = mongoose.model('CustumerCart', newCart);

export default Product