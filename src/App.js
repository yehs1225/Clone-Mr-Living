import React,{useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {useStateValue } from './StateProvider';
import {getUserName,getAllProducts,getUserCart,setUserCart} from './utils';
import {auth} from "./firebase";
import {onAuthStateChanged } from "firebase/auth";
import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import Cart from './components/Cart';
import HandleAccount from './components/HandleAccount';
function App() {
  const [{basket,product,user},dispatch]=useStateValue();
  useEffect(()=>{
    getAllProducts().then((event)=>{
      event.map(obj=>{
        dispatch({
          type:"GET_PRODUCT",
          item:{
            id:obj['id'],
            imageUrl:obj['imageUrl'],
            title:obj['title'],
            price:obj['price']
          }  
        })
      })
    })
    //will only run once when the app component is loads,(since [] is unchanged)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUserName(user).then((userName)=>{
          dispatch({
            type:"SET_USER",
            user:user,
            userName:userName
          })
        ;});
      } else {
        dispatch({
          type:"SET_USER",
          user:null,
          userName:null
        })
        dispatch({
          type:"CLEAR_ALL_BASKET",
          basket:[]
        })
      }
    });
  },[]);
  //update basket to user's firebase when it's changed
  useEffect(()=>{
    if(user){
      setUserCart(user,basket);
    }
  },[basket])
  return (
    <Router>
      <div className='App'>  
        <Routes>
          <Route path="/Cart" element={<><Header/><Navbar/><Cart/></>}/>
          <Route path="/HandleAccount" element={<HandleAccount/>}/>
          {/* Homepage */}
          <Route path="/" element={<><Header/><Navbar/><Home/><Footer/><Copyright/></>}/>
        </Routes>
      </div>
    </Router>

  )

}

export default App;
