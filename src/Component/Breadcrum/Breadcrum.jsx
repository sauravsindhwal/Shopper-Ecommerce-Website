import React from 'react'
import arrrow_icon from '../../assets/Ecommerce_Assets/Frontend_Assets/breadcrum_arrow.png'
import './Breadcrum.css'

const Breadcrum = (props) => {
    const {product} = props;
  return (
<div className="breadcrumb">
    Home <img src={arrrow_icon} alt="" /> Shop <img src={arrrow_icon} alt="" /> {product.category} 
    <img src={arrrow_icon} alt="" /> {product.name}
</div>
  )
}

export default Breadcrum