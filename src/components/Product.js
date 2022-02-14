import React from 'react';
import {useStateValue} from './../StateProvider';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BarChartIcon from '@material-ui/icons/BarChart';
import CurrencyFormat from 'react-currency-format';
import './Product.css'
function Product({imageUrl,title,price,id}) {
  const[{},dispatch] = useStateValue();
  const addToBasket =()=>{
    //dispatch item to data layer
    dispatch({
      type:'ADD_TO_BASKET',
      item:
      {
        id:id,
        price:price,
        title:title,
        imageUrl:imageUrl,
        quantity:1
      }
    })

  }
  return (
      <div className="product">
          <div className="product__image">
              {/* <img src="https://www.mrliving.com.tw/media/catalog/product/cache/912f4218b83600a6f47af6c76f1f9667/l/i/liz_doubed_v1_0222_c00.jpg"/> */}
            <img src={imageUrl}/>
          </div>
          <div className="product__desc">
            <div className="product__title">
                <span>{title}</span>
            </div>
            <CurrencyFormat className="product__price" value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            <div className="product__btn">
                <button className='addToCart' onClick={addToBasket}>加入購物車</button>
                <FavoriteIcon className='favorite'/>
                <BarChartIcon className='track'/>
            </div>
          </div>

      </div>
  )
}

export default Product
