
const schema =
 new mongoose.Schema(
    {
         title: 'string',
         price:"number",
         description:"string",
         
        
    });
const Product = mongoose.model('Product', schema);


export default Product