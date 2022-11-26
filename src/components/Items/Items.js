import Product from "../Product/Product";
import '../Items/Items.css';
const Items=({productsArray})=>{

return (
    <div className="items">
      {productsArray.map(p=>{
         return <Product product={p}/>
      })}
    </div>
)

}

export default Items