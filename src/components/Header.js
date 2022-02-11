import React,{useEffect,useState} from 'react';
import './Header.css'
import {Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {useStateValue} from './../StateProvider'
import {auth,db} from "./../firebase"
import {signOut } from "firebase/auth";
// Create a reference to the collections and use get to retrieve the results
import { collection, query, where , getDocs} from "firebase/firestore";


function Header() {
  const [{basket,user},dispatch]=useStateValue();
  const [dropdown,setDropdown] = useState(false);
  const [userName,SetUserName]=useState('');
  const handleClick = ()=>{
    setDropdown(!dropdown);
  }
  // if(user){getUserName()};
  useEffect(()=>{
    getUserName();},
    []
  )
  const getUserName = async() =>{
    //query user who's email === use.email
    const result=[];
    const userRef = collection(db,"SignedUpUserData");
    const q = query(userRef,where("Email","==",user.email));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach((doc)=>{
      console.log(doc.id," >>> ",doc.data());
      const userData = doc.data();
      result.push(userData.LastName);
      result.push(userData.FirstName);
      SetUserName(result[0]+result[1]);
    })
    
  }
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
                      <li onClick={() => {handleAuthentication(); handleClick();}}>登出</li> 
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
                <span className='header__cartCount'>0</span>
              </div>  
            </Link>
        </div>
      </div>
    </> 
  )
}

export default Header;
