import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import BarChartIcon from '@material-ui/icons/BarChart';
import CurrencyFormat from 'react-currency-format';
import './Product.css'
function Product({imageUrl,title,price,id}) {
  console.log(imageUrl);
  return (
      <div className="product">
          <div className="product__image">
              {/* <img src="https://www.mrliving.com.tw/media/catalog/product/cache/912f4218b83600a6f47af6c76f1f9667/l/i/liz_doubed_v1_0222_c00.jpg"/> */}
            <img src={imageUrl}/>
          </div>
          <div className="product__desc">
            <div className="product__title">
                <a>{title}</a>
            </div>
            <CurrencyFormat className="product__price" value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            <div className="product__btn">
                <button className='addToCart'>加入購物車</button>
                <FavoriteIcon className='favorite'/>
                <BarChartIcon className='track'/>
            </div>
          </div>

      </div>
  )
}

export default Product
