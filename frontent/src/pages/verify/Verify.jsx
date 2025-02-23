 import React, { useContext ,useEffect} from 'react'
 import './verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../components/Context/StoreContext.jsx/StoreContext';
import axios from "axios"
 const  Verify = () => {

    const [searchparam,setsearchparam]=useSearchParams();
    //extract items from website link
    const success=searchparam.get("success")
    const orderId=searchparam.get("orderId")
    const {url}=useContext(StoreContext);
    const navigate=useNavigate();
    const verifyPayment=async()=>{
        const response=await axios.post(url+"/api/order/verify",{success,orderId});
        if(response.data.success){
            navigate("/myorders");
        }
        else{
            navigate("/")
        }
    }

    useEffect(()=>{
        verifyPayment();
    },[])
    console.log({success,orderId})
   return (
     <div>
        <div className="verify">
            <div className="spinner">

            </div>
        </div>
       
     </div>
   )
 }
 
 export default  Verify
 