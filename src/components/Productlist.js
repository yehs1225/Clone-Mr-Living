import React, { Component } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import {useStateValue} from './../StateProvider'
import Product from './Product';
import './Productlist.css';
function Productlist() {
    const [{product}]=useStateValue();
  return (
    <ScrollContainer className="productlist">
        {product.map((item,index)=>(
            <Product 
            key={index}
            id={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            />
        ))}
    </ScrollContainer>
  )
}
export default Productlist