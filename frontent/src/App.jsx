 import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeholder from './pages/Placeholder/Placeholder'
import Footer from './components/footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/verify/Verify'
import Myorders from './pages/Myorders/Myorders'
 
 const App = () => {

  const[showlogin,setshowlogin]=useState(false);
   return (
    <>
    {showlogin?<LoginPopup setshowlogin={setshowlogin}/>:<></>}
     <div className="app">
      <Navbar setshowlogin={setshowlogin} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeholder/>}/>
        <Route path='/verify' element ={<Verify/>}></Route>
        <Route path='/myorders' element={<Myorders/>}></Route>
      </Routes>
     </div>
     <Footer/>
    </>
     
   )
 }
 
 export default App
 