import React from 'react'
import './Offer.css'
import exclusive_image from '../../assets/Ecommerce_Assets/Frontend_Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className="offer">
        <div className="offer-left">
<h1>Exclusive</h1>
<h1>Offer for You!</h1>
<p>ONLY ON THE BEST SELLER PRODUCTS</p>
<button>Shop Now</button>
        </div>

        <div className="offer-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offer