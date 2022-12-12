import mongoose from "mongoose";
import  express  from "express";
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
mongoConnect();
app.use(express.json());
app.listen(3001, function () {
    console.log("App listening at http://localhost:3001/");
  });


