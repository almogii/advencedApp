import mongoose from "mongoose";
import  express  from "express";
import CartModel from "./models/cart.js";
const app =express()
export function mongoConnect(){
    try{
        mongoose.connect(
            "mongodb+srv://main:pass123123@cluster0.yuzftpm.mongodb.net/test"
        );
    } catch (error) {
        return `Error connecting to Mongo ${error}`;
    }  
}


app.use(express.json());
app.post("/addCart", (req, res) => {
    let myData = CartModel(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });
app.listen(3001, function () {
    console.log("App listening at http://localhost:3001/"); 
    mongoConnect();
  });


