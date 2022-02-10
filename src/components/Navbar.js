import React,{useState} from 'react';
import './Navbar.css';
import NavBarComponent from './NavBarComponent';
import {Link} from 'react-router-dom';
// import {Link } from "react-router-dom";
function Navbar(props) {
    const[isHover,setIsHover] = useState(false);
  return( 
      <div className="navbar__container">
        <div className="navbar__text">
            <NavBarComponent component={Link} to={'/'} title="首頁"/>
            <NavBarComponent title="即將漲價區"/>
            <NavBarComponent title="現貨家具"/>
            <NavBarComponent title="空間單品"/>
            <NavBarComponent title="系列推薦"/>
            <NavBarComponent title="床枕寢具"/>
            <NavBarComponent title="沙發"/>
            <NavBarComponent component={Link} to={'/Blog'} title="BLOG"/>
            <NavBarComponent component={Link} to={'/about-mrliving-contact'} title="關於我們"/>
        </div>
      </div>

  )
}

export default Navbar;














