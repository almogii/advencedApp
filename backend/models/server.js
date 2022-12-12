const express=require('express')
const app=express()
const mongoose=require('mongoose')


const mongoConnect= ()=>{
    try{
        mongoose.connect(
            
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
