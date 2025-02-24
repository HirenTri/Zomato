import orderModel from "../models/ordermodel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY); // Debugging step


const placeorder = async (req, res) => {
    const frontend_url = "https://zomato-frontent-mmjb.onrender.com/";

    try {
        console.log("Creating new order...");

        // Create a new order
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });

        await newOrder.save();
        console.log("Order saved:", newOrder);

        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
        console.log("User cart data updated");

        // Prepare line items for Stripe payment
        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100 // Stripe expects amount in cents
            },
            quantity: item.quantity
        }));

        console.log("Line items prepared:", line_items);

        // Add delivery charge as a line item
        line_items.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: "Delivery Charge"
                },
                unit_amount: 2 * 100 // Delivery charge of $2
            },
            quantity: 1
        });

        console.log("Line items after adding delivery charge:", line_items);

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: "payment",
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        });
        // Log the session object
        console.log("Stripe session created:", session);
        // This should now log if the session is created
       

        // Send session URL to the frontend
        res.json({ success: true, session_url: session.url });

    } catch (error) {
        console.error("Error in placeorder:", error); // Log any error that occurs
        res.json({ success: false, message: "Error placing order" });
    }
};


const verifyorder=async(req,res)=>{
    const {orderId,success}=req.body;
    try {
        if(success==="true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            //make payment true
            res.json({success:true,message:"Paid"})
        }
        else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false,message:"Not Paid"});
        }
    } catch (error) {
         console.log(error);
         res.json({success:false,message:"error"})
    }
}

//user orders fro frontent

const userorders=async(req,res)=>{
 try {
    const orders=await orderModel.find({userId:req.body.userId});
    res.json({success:true,data:orders})


 } catch (error) {
    console.log(error);
    res.json({success:false,message:"error"})
 }
}

//listing order for admin pannel
const listorders=async(req,res)=>{
    try {
        const order=await orderModel.find({});
        res.json({success:true,data:order});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"});
    }
}


//api for update order status

const updatestatus=async(req,res)=>{
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({success:true,message:"Status Updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}
export { placeorder,verifyorder,userorders,listorders,updatestatus };
