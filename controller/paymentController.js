import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import {instance} from "../server.js"
import crypto from "crypto";

export const checkout=catchAsyncErrors(async (req,res)=>{
    const options = {
        amount: Number(req.body.amount*100),  // amount in the smallest currency unit
        currency: "INR",
      };
      const order=await instance.orders.create(options);
      res.status(200).json({
        success: true,
        order,
      });

});

export const paymentVerification = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", "KmZuqyKtj7gTphhvj6l9Avq4")
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    res.redirect(
      "http://localhost:5173/appointment"
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
}