import express from "express"
import { loginuser,registeruser } from "../controllers/usercontroller.js"

const userouter=express.Router()

userouter.post("/register",registeruser)
userouter.post("/login",loginuser)

export default userouter;