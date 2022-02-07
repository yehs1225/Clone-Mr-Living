import React,{useState} from 'react';
import './NavBarComponents.css';
function NavBarComponent(props) {
  const[isHover,setIsHover] = useState(false);
  return (
    <div className='container'>
      <a  href='#' className="navbar__homepage">
        <div className='navbarcomponent__title' onMouseEnter={()=>setIsHover(true)}onMouseLeave={()=>setIsHover(false)}>
          {props.title} 
        </div> 
        
      </a>   
      {isHover&&(<div className='navbar__item'>Hello</div>)}
    </div>
  );
}

export default NavBarComponent;
