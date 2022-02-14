import React,{useState,useEffect} from 'react';
import {useStateValue} from './../StateProvider'
import CartProduct from './CartProduct';
import Seperator from './Seperator';
import {Link } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './Cart.css';
function Cart() {
  const [{basket},dispatch] = useStateValue();
  const [subtotal,setSubtotal]=useState();
  useEffect(()=>{
    let sum=0;
    basket.map((item)=>{
      sum+=item.price*item.quantity;
    })
    setSubtotal(sum);
  },[basket])
  const [drop1,setDrop1] = useState(false);
  const [drop2,setDrop2] = useState(false);
  const handleClick1 = ()=>{
    setDrop1(!drop1);
  }
  const handleClick2 = ()=>{
    setDrop2(!drop2);
  }
  return (
    <div className="cart">
      <h1 className='cart__title'>購物車</h1>
      <div className="cart__summary">
        <div className="summary__content">    
          <h3>摘要</h3>     
          <div className="summary__section"> 
            <strong onClick={handleClick1}>估計運費和稅{drop1?(<KeyboardArrowDownIcon style={{transform:'rotate(180deg)'}}/>):(<KeyboardArrowDownIcon/>)}</strong>
            {drop1&&(<>
            <p>請選擇地址以計算運費<strong>(功能尚未建置)</strong></p>
            <div className="summary__title"> <strong>國家</strong></div>
            <select>
                <option value="台灣">台灣</option>
            </select>
            <div className="summary__title"> <strong>縣/市</strong></div>
            <select>
                <option value="臺北市">臺北市</option>
                <option value="新北市">新北市</option>
                <option value="桃園市">桃園市</option>
                <option value="新竹市">新竹市</option>
                <option value="新竹縣">新竹縣</option>
                <option value="苗栗縣">苗栗縣</option>
                <option value="臺中市">臺中市</option>
                <option value="彰化縣">彰化縣</option>
                <option value="雲林縣">雲林縣</option>
                <option value="嘉義縣">嘉義縣</option>
                <option value="嘉義市">嘉義市</option>
                <option value="臺南市">臺南市</option>
                <option value="高雄市">高雄市</option>
                <option value="屏東縣">屏東縣</option>
                <option value="宜蘭縣">宜蘭縣</option>
                <option value="臺東縣">臺東縣</option>
                <option value="花蓮縣">花蓮縣</option>
                <option value="南投縣">南投縣</option>
            </select>
            <div className="summary__title"> <strong>運費(不包含樓層費)</strong></div>
            <input type="radio"id="html" name="fav_language" value="HTML"/><label>以件計價 $0</label>
            </>)}
          </div>
          <div className="summary__section"> 
            <strong onClick={handleClick2}>折扣碼{drop2?(<KeyboardArrowDownIcon style={{transform:'rotate(180deg)'}}/>):(<KeyboardArrowDownIcon/>)}</strong>
            {(drop2)&&(<><div className='summary__coupon'><input value='(功能尚未建置)'></input></div>
            <button className='summary-btn btn-coupon'><strong>使用折扣</strong></button></>)}
          </div>
          
          <div className="summary__section"> 
            <div><span>小計</span><span><CurrencyFormat className="" value={subtotal} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span></div>
            <div><span>運費 (運費(不包含樓層費) - 以件計價)</span><span>$0</span></div>
          </div>
          <div className="summary__section"> 
            <div className="subtotal"> <strong>訂單總計</strong><strong><CurrencyFormat className="" value={subtotal} displayType={'text'} thousandSeparator={true} prefix={'$'} /></strong></div>  
          </div>           
          <button className='summary-btn btn-checkout'><strong>去結帳</strong></button>   
        </div>
      </div>
      <div className="cart__basket">
        {(basket.length)?
        //if the basket is not empty
        ( <>
            <div className="basket__header">
              <span className='product'><b>產品</b></span>
              <span className='price'><b>價格</b></span>
              <span className='number'><b>數量</b></span>
              <span className='total'><b>小計</b></span>		
            </div>
            {basket.map((item,index)=>(
              <>
                <Seperator height='10px'/>
                <CartProduct
                  key={index}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                />
              </>
            ))}
          </>
          
        )
        :
        //the basket is empty
        (
          <>
            <div>你的購物車中沒有任何物品</div>    
            <div>Click <Link to="/">here</Link> to continue shopping.</div> 
          </>
        )
        }
      </div>
    </div>
  )
}

export default Cart