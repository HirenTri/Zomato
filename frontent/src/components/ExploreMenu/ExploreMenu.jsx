import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array of dishes crafted with
        the finest experience and lifting your dining experience,one deleicius meal at a time.</p>
        <div className="explore-menu-list">

        {/* The key attribute is used by React to uniquely identify each list item. */}
            {menu_list.map((item,index)=>{
                return (
                    // here on click any item category store that food-items in it
                   //here comparison in img src is done to make which food-item image active for styling
                   <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
