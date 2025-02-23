import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../components/Context/StoreContext.jsx/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { carditems, food_list, removefromcart , getTotalAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='card'>
      <div className="card-items">
        <div className="card-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      <br />
      <hr />

      {/* Mapping through food_list */}
      {food_list.map((item) => {
        if (carditems[item._id] > 0) {
          return (
            <div key={item._id}> {/* Add the unique key here */}
              <div className="card-items-title card-items-item">
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{carditems[item._id]}</p>
                <p>${carditems[item._id] * item.price}</p>
                <p onClick={() => removefromcart(item._id)} className='cross'> x</p>
              </div>
              <hr />
            </div>
          )
        }
        return null; // Adding a return null to handle the case where carditems[item._id] <= 0
      })}
      
      <div className="card-bottom">
        <div className="card-total">
          <h2>Card Totals</h2>
          <div> 
            <div className="card-total-detail">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="card-total-detail">
              <p>Delivery fee</p>
              <p>${getTotalAmount() ? 2 : 0}</p>
            </div>
            <hr />
            <div className="card-total-detail">
               <b>Total</b>
               <b>${getTotalAmount() ? getTotalAmount() + 2 : 0}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
