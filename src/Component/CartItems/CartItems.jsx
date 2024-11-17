import React, { useContext } from 'react'
import './CartItems.css'    
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../../assets/Ecommerce_Assets/Frontend_Assets/cart_cross_icon.png'
const CartItems = () => {
    const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext)
  return (
    <div className="cartitems">
<div className="cartitems-format-main">
    <p>Products</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>

    </div>
    <hr />
    {
        all_product.map((e, i)=>{

if(cartItems[e.id]>0) {
    return <div key={i}>
        <div className="cartitems-format cartitems-format-main">
            <img src={e.image} alt="" className='carticon-product-icon'/>
<p>{e.name}</p>
<p>${e.new_price}</p>
<button className='cartitems-quantity'>{cartItems[e.id]}</button>
<p>${e.new_price*cartItems[e.id]}</p>
<img className='cart-items-remove' src={remove_icon} alt="" onClick={()=>{removeFromCart(e.id)}}/>
        </div>
        <hr />
        
    </div>
    
}
    return null;

        })
    }
    <div className="cart-items-down">
        <div className='cart-items-total'>
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Total</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
            </div>
            <button>Proceed to Checkout</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you've a promocode, enter please</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='promocode'/>
                <button>submit</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CartItems