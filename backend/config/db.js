import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://trivedihiren738:91668615@cluster0.bvonp.mongodb.net/food-del").then(()=>console.log("DB connected"));

}
