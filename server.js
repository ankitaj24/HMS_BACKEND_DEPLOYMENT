import app from "./app.js";
import cloudinary from "cloudinary";
import Razorpay from "razorpay";


export const instance=new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY ,
    key_secret: process.env.RAZORPAY_API_SECRET,
});



cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


app.listen(process.env.PORT,()=>{
    console.log(`Server listening on port ${process.env.PORT}`);
})

