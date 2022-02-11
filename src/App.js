import React,{useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {useStateValue } from './StateProvider';
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
  const [{},dispatch]=useStateValue();
  //will only run once when the app component is loads,(since [] is unchanged)
  useEffect(()=>{
    //will only run once when the app component is loads,(since [] is unchanged)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type:"SET_USER",
          user:user
        })
      } else {
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    });
  },[])
  return (
    <Router>
      <div className='App'>  
        <Routes>
          {/* Homepage */}
          <Route path="/Cart" element={<><Header/><Navbar/><Cart/></>}/>
          {/* Homepage */}
          <Route path="/HandleAccount" element={<HandleAccount/>}/>
          <Route path="/" element={<><Header/><Navbar/><Home/><Footer/><Copyright/></>}/>
        </Routes>
      </div>
    </Router>

  )

}

export default App;
