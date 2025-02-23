import express from "express"
import authmiddleware from "../middleware/auth.js"
import { listorders, placeorder, updatestatus, userorders, verifyorder } from "../controllers/ordercontroller.js"

const orderouter=express.Router();

orderouter.post("/place",authmiddleware,placeorder);
orderouter.post("/verify",verifyorder);
orderouter.post("/userorders",authmiddleware,userorders);
orderouter.get("/list",listorders);
orderouter.post("/status",updatestatus);
export default orderouter;