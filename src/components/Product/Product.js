 import './Product.css'

const Product=({product})=>{
   

    return (
        <div className='product'>
        <ul className='product-items'>
        <div className='product-info'>
        <p className='product-title'>{product.title}</p>
        <p className='product-price'>{product.price}$</p>
        </div>
        <img className="product-img"  src={product.images[0]}></img>
        </ul>
         
        </div>
    )
}
export default Product