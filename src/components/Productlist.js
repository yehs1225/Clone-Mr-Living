import React from 'react';
import {useStateValue} from './../StateProvider'
import Product from './Product';
import './Productlist.css';
function Productlist() {
    const [{basket,user,userName,product},dispatch]=useStateValue();
    // useEffect(()=>{
    //     getAllProducts().then((product)=>{
    //         setProductList(product);
    //         console.log(product);
    //     })
    // },[])
  return (
    <div className="productlist">
        {product.map((obj,index)=>(
            <Product 
            key={index}
            id={obj.id}
            imageUrl={obj.imageUrl}
            title={obj.title}
            price={obj.price}
            />
        ))}
        {/* <Product 
            id='1'
            image="https://www.mrliving.com.tw/media/catalog/product/cache/912f4218b83600a6f47af6c76f1f9667/c/h/charles_cabinet_tall_v1_1210_p00_1.jpg"
            title="Charles 五斗櫃"
            price={23990}
            />
        <Product
            id='2' 
            image="https://www.mrliving.com.tw/media/catalog/product/cache/7f7d57fb719af590dc8091b01c5f2963/m/a/martin_diningchair_v1_0408_p00.jpg"
            title="Martin 布餐椅"
            price={4500}
            />
        <Product 
            id='3'
            image="https://www.mrliving.com.tw/media/catalog/product/cache/912f4218b83600a6f47af6c76f1f9667/n/o/nook_wall__black.jpg"
            title="Nook 壁燈"
            price={3490}
            />
        <Product 
            id='4'
            image="https://www.mrliving.com.tw/media/catalog/product/cache/804a86e25a95667105da151c406f212a/h/e/henry_3s_flavio006_v2_0903_p00.jpg"
            title="Henry 三人布沙發 (Flavio 006 Stone)"
            price={29990}
            />
        <Product 
            id='5'
            image="https://www.mrliving.com.tw/media/catalog/product/cache/912f4218b83600a6f47af6c76f1f9667/t/w/twinkle_armchair_weaveivory_v1_0118_p00.jpg"
            title="Twinkle 布單人椅 (Weave Ivory)"
            price={19990}
            /> */}
    </div>
  )
}
export default Productlist