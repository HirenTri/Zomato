import userModel from "../models/userModel.js";
import authmiddleware from "../middleware/auth.js";
//add items to cart
const addtocart=async(req,res)=>{
  try {
    let userdata=await userModel.findById(req.body.userId);
    let cartData=await userdata.cartData;
    if(!cartData[req.body.itemId]){
        cartData[req.body.itemId]=1
    }
    else{
        cartData[req.body.itemId]+=1;
    }
     await userModel.findByIdAndUpdate(req.body.userId,{cartData});
     res.json({success:true,message:"Added to cart"});
  } catch (error) {
      console.log(error);
      res.json({success:false,message:"Error"});
  }
}

//remove items from cart

const removecartitems=async(req,res)=>{
    try {
        let userData=await userModel.findById(req.body.userId);
        let cartData=await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"Removed from cart"})
    } catch (error) {
      console.log(error);
      res.json({success:false,message:"Error"})  
    }
}

//fetch items from cart

const getitems=async(req,res )=>{
   try {
    let userData=await userModel.findById(req.body.userId);
    let cartData=await userData.cartData;
    res.json({success:true,cartData});
   } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
   }
}

export {addtocart,removecartitems,getitems};