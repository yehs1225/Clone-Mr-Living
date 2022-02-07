import React,{useState} from 'react';
import './Navbar.css'
import NavBarComponent from './NavBarComponent'
// import {Link } from "react-router-dom";
function Navbar(props) {
    const[isHover,setIsHover] = useState(false);
  return( 
      <div className="navbar">
        <div className="navbar__container">
            <NavBarComponent title="首頁"/>
            <NavBarComponent title="即將漲價區"/>
            <NavBarComponent title="現貨家具"/>
            <NavBarComponent title="空間單品"/>
            <NavBarComponent title="系列推薦"/>
            <NavBarComponent title="床枕寢具"/>
            <NavBarComponent title="沙發"/>
            <NavBarComponent title="BLOG"/>
            <NavBarComponent title="關於我們"/>
            {/* <a href='#' className="navbar__homepage" onMouseEnter={()=>setIsHover(true)}onMouseLeave={()=>setIsHover(false)}>
                首頁 
            </a>    
            {isHover&&(<div>Hello</div>)}
            <a  href='#' className="navbar__homepage">
                即將漲價區 
            </a>   
            <a  href='#' className="navbar__homepage">
                現貨家具
            </a>   
            <a  href='#' className="navbar__homepage">
                空間單品
            </a>   
            <a  href='#' className="navbar__homepage">
                系列推薦 
            </a>   
            <a  href='#' className="navbar__homepage">
                床枕寢具 
            </a>  
            <a  href='#' className="navbar__homepage">
                沙發
            </a>  
            <a  href='#' className="navbar__homepage">
                BLOG 
            </a>   
            <a  href='#' className="navbar__homepage">
                關於我們 
            </a>   */}
        </div>
      </div>

  )
}

export default Navbar;














