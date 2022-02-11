import React from 'react'
import './CartProduct.css';
function CartProduct() {
  return (
    <div className='cartproduct'>
        <img className='image' src='https://www.mrliving.com.tw/media/catalog/product/cache/804a86e25a95667105da151c406f212a/h/e/henry_3s_flavio006_v2_0903_p00.jpg'/>
        <div className='title'>Henry 三人布沙發 (Flavio 006 Stone)</div>
        <div className='price'>29990</div>
        <div  className='number'><input type="number" value="5"></input></div>
        <div className='total'>29990</div>
    </div>
  )
}

export default CartProduct