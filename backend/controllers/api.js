
const Data = require('./models/product');
const http = require('http');

module.exports = (req,res)=>{
    let data =[]; //array to keep data chunks
    
    http.get('https://dummyjson.com/products', function (response) { //send  request to api
        
  response.on('data', d => {
    data.push(d); //get data as chunk by chunk and push them to array
  }).on('error',e=>{
      console.log(e); 
  });

  response.on('end',()=>{
//when all data chunks are received, 
// concat all buffered chunks and 
//create js object from it
   let fetchedData= JSON.parse(Buffer.concat(data).toString()); 
   console.log(fetchedData);
   let result = new Data({
    entries:fetchedData.entries // fetched data has entries array , that is data that you want to save
});
result.save() //save data to db
    .then(result => {
        console.log('Entry saved');
    })
    .catch(err => {
        console.log(err);
    });

    res.send(result);
  })

      
}) };