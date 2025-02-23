import React, { useContext, useEffect ,useState} from 'react'
import './Placeholder.css'
import { StoreContext } from '../../components/Context/StoreContext.jsx/StoreContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Placeholder = () => {

  const {getTotalAmount,token,food_list,carditems,url}=useContext(StoreContext)

  const [data,setdata]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })
  
  const onChangehandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;

    setdata(data=>({...data,[name]:value}))
  }

  const placeorder=async(event)=>{
    event.preventDefault();
    let orderitems=[];
    food_list.forEach((item) => {
      if (carditems[item._id] > 0) {
        let iteminfo = item;
        iteminfo["quantity"] = carditems[item._id];
        orderitems.push(iteminfo);
      }
    });
    
    // console.log(orderitems);

    let orderdata={
      address:data,
      items:orderitems,
      amount:getTotalAmount()+2,
    }

    let response =await axios.post(url+"/api/order/place",orderdata,{headers:{token}});
    if(response.data.success){
      
      const {session_url}=response.data;
      window.location.replace(session_url);
      
    }
    else{
      alert("Error");
    }
  }

  const navigate=useNavigate();
  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
    else if(getTotalAmount()===0){
      navigate('/cart')
    }
  },[token])
  // useEffect(()=>{
  //   console.log(data);
  // },[data])
 
  return (
    <form onSubmit={placeorder} action="" className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information
        </p>
        <div className="multi-fields">
            <input required  name='firstName' value={data.firstName} onChange={onChangehandler} type="text" placeholder="First Name" />
            <input required  name='lastName' value={data.lastName} onChange={onChangehandler} type="text" placeholder="Last Name"/>
          </div>
          <input required name='email' value={data.email} onChange={onChangehandler} type="email" placeholder="Email Address"/>
          <input required name='street' value={data.street} onChange={onChangehandler} type="text" placeholder="Street"/>
        <div className="multifields">
          <input required name='city' value={data.city} onChange={onChangehandler} type="text" placeholder="City"/>
          <input required name='state' value={data.state} onChange={onChangehandler} type="text" placeholder="State"/>
        </div>
        <div className="multifields">
          <input required name='zipcode' value={data.zipcode} onChange={onChangehandler} type="text" placeholder="ZipCode"/>
          <input required name='country' value={data.country} onChange={onChangehandler} type="text" placeholder="Country"/>
        </div>
        <input required name='phone' value={data.phone} onChange={onChangehandler} type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
      <div className="card-total">
          <h2>Card Totals</h2>
          <div> 
          <div className="card-total-detail">
            <p>Subtotal</p>
            <p>${ getTotalAmount()}</p>
          </div>
          <hr/>
          <div className="card-total-detail">
            <p>Delivery fee</p>
            <p>${getTotalAmount()?2:0}</p>
          </div>
          <hr/>
          <div className="card-total-detail">
             <b>Total</b>
             <b>${getTotalAmount()?getTotalAmount()+2:0}</b>
          </div>

          </div>
          <button type="submit" >PROCEED TO PAYMENT</button>
          
        </div>
      </div>
    </form>
  )
}

export default Placeholder
