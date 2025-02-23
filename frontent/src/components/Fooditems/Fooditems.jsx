import React, { } from 'react'
import './Fooditems.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext.jsx/StoreContext';
const Fooditems = ({id,name,price,description,image}) => {

    // const[itemcount,setitemcount]=useState(0);
    const {carditems,addtocart,removefromcart,url}=useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img src={url+"/images/"+image} alt="" className="food-item-image" />
            {!carditems[id]
                ? <img onClick={()=>addtocart(id)} src={assets.add_icon_white} alt="" className="add" /> :
                <div className="food-item-counter">
                 <img onClick={()=>removefromcart(id)} src={assets.remove_icon_red} alt="" />
                 <p>{carditems[id]}</p>
                 <img onClick={()=>addtocart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
               
            </div>
            <p className="food-item-desc">
                {description}
            </p>
            <p className="food-item-price">
                ${price}
            </p>
        </div>
      
    </div>
  )
}

export default Fooditems;
