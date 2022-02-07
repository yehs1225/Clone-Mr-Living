import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Input from '@material-ui/core/Input';
function Header() {
  return (
      <div className="header">
        <img className='header__logo' src='https://www.mrliving.com.tw/media/logo/stores/1/logo_3_1_.png'/>
        <div className="header__search">     
            <input type="text" placeholder="皮沙發、布沙發" className='header__searchInput'/>
            <SearchIcon className='header__searchIcon'/>
        </div>
        <div className="header__nav">
            <div className="header__link">
                <a>歡迎!</a>
                <a>登入</a>
                <a>或者</a>
                <a>註冊</a>
            </div>
            <div className="header__cart">
              <ShoppingCartIcon/>
              <span className='header__cartCount'>0</span>
            </div>  
        </div>
      </div>
      
  )
}

export default Header;
