import React,{useState,useEffect} from 'react';
import {useStateValue} from './../StateProvider'
import './CartProduct.css';
import CurrencyFormat from 'react-currency-format';
import DeleteIcon from '@material-ui/icons/Delete';
function CartProduct({imageUrl,title,price,id,quantity}) {
  const [{},dispatch] = useStateValue();
  const [num,setNum] = useState(quantity);
  useEffect(()=>{
    if(num<quantity){//reduce
      dispatch({
        type:'REDUCE_FROM_BASKET',
        item:
        {
          id:id,
          price:price,
          title:title,
          imageUrl:imageUrl,
        }
      })
    }if (num>quantity){//add
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
    
  },[num])
  const removeFromBasket = ()=>{
    //remove the item from the basket
    dispatch({
        type:'REMOVE_FROM_BASKET',
        id:id
    })
  }
  return (
    <div className='cartproduct'>
        <img className='image' src={imageUrl}/>
        <div className='title'>{title}</div>
        <div className='price'><CurrencyFormat className="" value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></div>
        <div  className='number'><input type="number" value={quantity} min="1" onChange={(e)=>{setNum(e.target.value)}}></input></div>
        <div className='total'><CurrencyFormat className="" value={price*quantity} displayType={'text'} thousandSeparator={true} prefix={'$'} /></div>
        <div  className='delete'><DeleteIcon onClick={removeFromBasket}/></div>
    </div>
  )
}

export default CartProduct