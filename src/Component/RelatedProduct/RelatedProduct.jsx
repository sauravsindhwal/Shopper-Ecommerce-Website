import React from 'react'
import './RelatedProduct.css'
import data_product from '../../assets/Ecommerce_Assets/Frontend_Assets/data'
import Item from '../Item/Item'

const RelatedProduct = () => {
  return (
    <div className="relatedproducts">
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
{
    data_product.map((item, i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image}
        old_price={item.old_price} new_price={item.new_price}/>
    })
}
        </div>
    </div>
  )
}

export default RelatedProduct