import express from "express"
import { addFood ,ListFood,removefood} from "../controllers/foodController.js"
import multer from "multer"

const foodRouter =express.Router();

//image Storage Engine

const storage = multer.diskStorage({
    destination: "uploads", // Directory to store the files
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`); // Use backticks for template literals
    }
});


const upload=multer({storage:storage})
foodRouter.post("/add",upload.single("image") ,addFood);
foodRouter.get("/list",ListFood);
foodRouter.post("/remove",removefood);
export default foodRouter;