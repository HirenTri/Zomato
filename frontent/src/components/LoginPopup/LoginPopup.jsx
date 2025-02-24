import React, { useContext, useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from "../../components/Context/StoreContext";

import axios from "axios"
const LoginPopup = ({setshowlogin}) => {
  const[currstate,setcurrstate]=useState("Sign Up")
    const {url,seToken}=useContext(StoreContext)
    const [data,setdata]=useState({
      name:"",
      email:"",
      password:""
    })

    const onChangehandler=(event)=>{
     const name=event.target.name;
     const value=event.target.value;
     setdata(data=>({...data,[name]:value}))
    }

    const onlogin=async(event)=>{
     event.preventDefault()
     let newurl=url;
     if(currstate==="Login"){
      newurl+="/api/user/login"


     }
     else{
      newurl+="/api/user/register"
     }

     const response=await axios.post(newurl,data)
     if(response.data.success){
      seToken(response.data.token);
      localStorage.setItem("token",response.data.token)//store token locally
      setshowlogin(false) //login get hide after successful login 
     }
     else{
      alert(response.data.message)
     }
    }

    // useEffect(()=>{
    //   console.log(data);
    // },[data])

     
  return (
    <div className='login-popup'>
      <form onSubmit={onlogin} action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currstate}</h2>
            <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />
        </div>

        <div className="login-popup-inputs">
            {currstate==='Login'?<></>:<input type="text" name="name" onChange={onChangehandler} value={data.name}  placeholder="Your name" required/>}
             
            <input type="email" name="email" value={data.email} onChange={onChangehandler} placeholder="Your email" required/>
            <input type="password" name="password" value={data.password} onChange={onChangehandler} placeholder="Password" required/>
        </div>
        <button type="submit">{currstate==="Sign Up"?"Create account":"Login"}</button>
      <div className="login-popup-condition">
        <input type="checkbox" required />
        <p>By continuing , i agree to the terms of use and privacy policy.</p>
      </div>
      {currstate==="Login"?<p>Create a new account <span onClick={()=>setcurrstate("Sign Up")}>Click here</span></p>
      :<p>Already have an account? <span onClick={()=>setcurrstate("Login")}>Login here</span></p>}
       
      </form>
    </div>
  )
}

export default LoginPopup
