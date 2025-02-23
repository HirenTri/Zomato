import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartroute.js";
import 'dotenv/config'
import orderouter from "./routes/orderoute.js";
// App config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());


//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderouter)
// Routes
app.get("/", (req, res) => {
    res.send("API Working");
});

// Server listening
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Corrected template literal syntax
});


// mongodb+srv://trivedihiren738:9166861529@cluster0.bvonp.mongodb.net/?