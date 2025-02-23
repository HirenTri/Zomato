import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
 import Foodisplay from '../../components/Food_Display/foodisplay'
import Appdownload from '../../components/Appdownload/Appdownload'
const Home = () => {
  
 const[category,setCategory]=useState("All");

     
  return (
    <div>
      <Header/>
      {/* use of props */}
      <ExploreMenu category={category} setCategory={setCategory}/>
       <Foodisplay category={category}/>
       <Appdownload/>
    </div>
  )
}

export default Home
