
// Context api is used for providing data globally
// to any component in react with help of context Provider

import { createContext, useEffect, useState } from "react";
 import axios from "axios";
// Provider tells the all compnents that this global context is present
export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{

    const url="http://localhost:4000";
    const [token,seToken]=useState("")
    const[food_list,setfoodlist]=useState([]);
    //id is provide for distinguish different food items
    //globally increase or decrease by creating two different objects for  food cart items 
    const[carditems,setcarditems]=useState({});

    const addtocart=async (itemid) => {
        if(!carditems[itemid]){
            setcarditems ((prev)=>({...prev,[itemid]:1}))
        }
        else{
            setcarditems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }

        if(token){
            await axios.post(url + "/api/cart/add", { itemId: itemid }, { headers: { token } });

            //add token in header and add item to corresponding user token
            console.log(itemid);
        }
         
    }

    // console.log("Food list:", food_list);

    const removefromcart=async (itemid)=>{
        setcarditems((prev=>({...prev,[itemid]:prev[itemid]-1})))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId:itemid},{headers:{token}});
        }
    }


    const getTotalAmount=()=>{
        let totalAmount=0;
        for(const item in carditems){
            if(carditems[item]>0){
                let iteminfo=food_list.find((product)=>product._id===item);
                totalAmount+=iteminfo.price*carditems[item];

            }
            
        }
        return totalAmount;
    }
    // useEffect(()=>{
    //     console.log(carditems);
    // },[carditems]);

     const fetchfoodlist=async()=>{
        const response=await axios.get(url+"/api/food/list");
        setfoodlist(response.data.data)
     }

     const loadcartdata=async(token)=>{
        const  response=await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setcarditems(response.data.cartData);
     }
     useEffect(()=>{
        async function loadData(){
            await fetchfoodlist();
            if(localStorage.getItem("token")){
                seToken(localStorage.getItem("token"));
                await loadcartdata(localStorage.getItem("token"));
            }
        }
        loadData();
         
    },[]);
    //create object for global data
    const contextValue={
     food_list,
     carditems,
     setcarditems,
     addtocart,
     removefromcart,
     getTotalAmount,
     url,
     token,
     seToken

    }



    return(
       <StoreContext.Provider value={contextValue}>
       {props.children}
       </StoreContext.Provider>
    )
}

export default StoreContextProvider;