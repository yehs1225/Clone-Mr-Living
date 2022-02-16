import React,{useState} from 'react';
import './Header.css'
import NavBarComponent from './NavBarComponent';
import Seperator from './Seperator';
import {Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MenuIcon from '@material-ui/icons/Menu';
import {useStateValue} from './../StateProvider'
import {auth} from "./../firebase"
import {signOut } from "firebase/auth";
// Create a reference to the collections and use get to retrieve the results



function Header() {
  const [{basket,user,userName}]=useStateValue();
  const [dropdown,setDropdown] = useState(false);
  const [openNav,setOpenNav] = useState(false);
  const [sideNavType,setSideNavType] = useState('menu');
  const handleClick = ()=>{
    setDropdown(!dropdown);
  }
  const handleOpenNav = ()=>{
    setOpenNav(!openNav);
  }
  const SideNavMenu2Account = ()=>{
    setSideNavType('account');
  }
  const SideNavAccount2Menu = ()=>{
    setSideNavType('menu');
  }
  var basketNum =0;
  basket.map((item)=>{
    basketNum += item.quantity;
  })
  const handleAuthentication = ()=>{
      if(user){
          signOut(auth).then(() => {
              // Sign-out successful.
            }).catch((error) => {
              // An error happened.
            });
      }
  }
  return (
    <>
      <div className="header">
      
        {(openNav)&&
        (<div className="sidenav">
            
            <div>
            <span className='sidenav-menu' onClick={SideNavAccount2Menu} style={{"backgroundColor":sideNavType==='menu'?"#f0f0f0":"#e3e3e3"}}>目錄</span>
            <span className='sidenav-account' onClick={SideNavMenu2Account} style={{"backgroundColor":sideNavType==='account'?"#f0f0f0":"#e3e3e3"}}>帳戶</span><a href="#" className="closebtn" onClick={handleOpenNav}>&times;</a></div>
            
              {(sideNavType==='account')&&(
                <div className="sidenav-account-list">
                  <Seperator height='1px'/>
                  <div>歡迎！</div>
                  <Seperator height='1px'/>
                  {(user)&&(<>
                              <div><a href='#'>我的帳戶</a></div>
                              <Seperator height='1px'/>
                              <div><a href='#'>我的追蹤清單</a></div>
                              <Seperator height='1px'/>
                              <div onClick={handleAuthentication}><Link to="/"style={{ font:'inherit',color: 'inherit', textDecoration: 'none'}}>登出</Link></div>
                              <Seperator height='1px'/>
                            </>)}
                  {(!user)&&(<>
                    <div><Link to="/HandleAccount"   state={{ type: "login" }} style={{ font:'inherit',color: 'inherit', textDecoration: 'none'}}>登入</Link></div>
                    <Seperator height='1px'/>
                    <div><Link to="/HandleAccount" state={{ type: "register" }} style={{ font:'inherit',color: 'inherit', textDecoration: 'none'}}>註冊</Link></div>
                    <Seperator height='1px'/>
                            </>)}
                </div>
              )}
              {(sideNavType==='menu')&&(<>
                <Seperator height='1px'/>
                <NavBarComponent component={Link} to={'/'} title="首頁"/>    
                <Seperator height='1px'/>        
                <NavBarComponent title="即將漲價區"/>
                <Seperator height='2px'/>
                <NavBarComponent title="現貨家具"/>
                <Seperator height='1px'/>
                <NavBarComponent title="空間單品"/>
                <Seperator height='1px'/>
                <NavBarComponent title="系列推薦"/>
                <Seperator height='2px'/>
                <NavBarComponent title="床枕寢具"/>
                <Seperator height='1px'/>
                <NavBarComponent title="沙發"/>
                <Seperator height='1px'/>
                <NavBarComponent component={Link} to={'/Blog'} title="BLOG"/>
                <Seperator height='1px'/>
                <NavBarComponent component={Link} to={'/about-mrliving-contact'} title="關於我們"/>
                <Seperator height='1px'/>
            </>)}
        </div>)}
        <div className="header__main" style={{marginLeft:openNav?'810px':'0'}}>
        <div  className='menuIcon' ><MenuIcon fontSize='large' onClick={handleOpenNav}/></div>
        <Link to="/">
          <img className='header__logo' title='MR.LIVING' alt='MR.LIVING' src='https://www.mrliving.com.tw/media/logo/stores/1/logo_3_1_.png'/>
        </Link>
        <div className="header__search">     
            <input type="text" placeholder="皮沙發、布沙發" className='header__searchInput'/>
            <SearchIcon className='header__searchIcon'/>
        </div>
        <div className={dropdown?"header__nav__drop":"header__nav"} >
            <div className="header__link">    
                {user?
                <div>
                  <div className="dropdown"><div className='flex'><span>歡迎您，{userName}</span><KeyboardArrowDownIcon onClick={handleClick}/></div>
                  {(dropdown)&&(
                    <ul>
                      <li>我的帳戶</li>
                      <li>我的追蹤清單</li>
                      <li onClick={() => {handleAuthentication(); handleClick();}}><Link to="/"style={{ font:'inherit',color: 'inherit', textDecoration: 'none'}}>登出</Link></li> 
                    </ul>
                  )}
                  </div>  
                </div>
                ://Guest
                  (<div className={dropdown?"":"header__nav__guest"}>
                    <div>歡迎</div>
                    <Link to="/HandleAccount" state={{ type: "login" }} style={{ font:'inherit',color: 'inherit', textDecoration: 'none'}}><div className='login-link'>登入</div></Link>
                        <div>或者</div>
                    <Link to="/HandleAccount" state={{ type: "register" }} style={{ font:'inherit',color: 'inherit', textDecoration: 'none'}}><div className='register-link'>註冊</div></Link>
                  </div>)}
            </div>
            <Link style={{ color: 'inherit', textDecoration: 'none'}}to="/Cart">
              <div  className="header__cart">
                <ShoppingCartIcon className='cart-icon'/>
                {basketNum?(<span className='header__cartCount'>{basketNum}</span>):('')}
              </div>  
            </Link>
        </div>
        </div>
      </div>
    </> 
  )
}

export default Header;
