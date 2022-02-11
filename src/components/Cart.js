import React,{useState} from 'react';
import CartProduct from './CartProduct';
import Seperator from './Seperator';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './Cart.css';
function Cart() {
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
            <p>請選擇地址以計算運費</p>
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
            <input type="radio"id="html" name="fav_language" value="HTML"/><label>以件計價 $2,550</label>
            </>)}
          </div>
          <div className="summary__section"> 
            <strong onClick={handleClick2}>折扣碼{drop2?(<KeyboardArrowDownIcon style={{transform:'rotate(180deg)'}}/>):(<KeyboardArrowDownIcon/>)}</strong>
            {(drop2)&&(<><div className='summary__coupon'><input></input></div>
            <button className='summary-btn btn-coupon'><strong>使用折扣</strong></button></>)}
          </div>
          
          <div className="summary__section"> 
            <div><span>小計</span><span>$93,960</span></div>
            <div><span>運費 (運費(不包含樓層費) - 以件計價)</span><span>$3,900</span></div>
          </div>
          <div className="summary__section"> 
            <div className="subtotal"> <strong>訂單總計</strong><strong>$93,960</strong></div>  
          </div>           
          <button className='summary-btn btn-checkout'><strong>去結帳</strong></button>   
        </div>
      </div>

      <div className="cart__basket">
        <div className="basket__header">
          <span><b>產品</b></span>
          <span><b>價格</b></span>
          <span><b>數量</b></span>
          <span><b>小計</b></span>		
        </div>
        <Seperator/>
        <CartProduct/>
        <Seperator/>
        <CartProduct/>
      </div>
    </div>
  )
}

export default Cart