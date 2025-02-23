import express from "express"
import { addtocart,removecartitems,getitems } from "../controllers/cardcontroller.js"
import authmiddleware from "../middleware/auth.js";


const cartRouter=express.Router();

cartRouter.post("/add",authmiddleware,addtocart);
cartRouter.post("/remove",authmiddleware,removecartitems);
cartRouter.post("/get",authmiddleware,getitems);

export default cartRouter;
