import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import Cart from './components/Cart';
function App() {
  return (
    <Router>
      <div className='App'>  
        <Routes>
          {/* Homepage */}
          <Route path="/Cart" element={<><Header/><Navbar/><Cart/></>}/>
          {/* Homepage */}
          <Route path="/" element={<><Header/><Navbar/><Home/><Footer/><Copyright/></>}/>
        </Routes>
      </div>
    </Router>

  )

}

export default App;
