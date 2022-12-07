import Product from "../Product/Product";
import '../Items/Items.css';
const Items=(props)=>{

return (
    <div className="items">
      {props.productsArray.map((p,index)=>{
         return <Product product={p} index={index} func={props.func}/>
      })}
      
    </div>
)

}

export default Items