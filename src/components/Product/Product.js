 import './Product.css'

const Product=(props)=>{
   

    return (
        <div className='product'>
        <ul className='product-items'>
        <div className='product-info'>
        <p className='product-title'>{props.product.title}</p>
        <p className='product-price'>{props.product.price}$</p>
        <button onClick={()=>props.func(props.index)} className='product-add-btn'>add to cart</button>
        </div>
        <img alt="product-picture"className="product-img"  src={props.product.images[0]}></img>
        </ul>
         
        </div>
    )
}
export default Product