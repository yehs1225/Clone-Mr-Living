import React from 'react';
import {useStateValue} from './../StateProvider'
import Product from './Product';
import './Productlist.css';
function Productlist() {
    const [{product}]=useStateValue();
  return (
    <div className="productlist">
        {product.map((item,index)=>(
            <Product 
            key={index}
            id={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            />
        ))}
    </div>
  )
}
export default Productlist