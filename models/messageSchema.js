import mongoose from "mongoose";
import validator from "validator";


const messageSchema=new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3,"First Name must contain atleast three characters..."]
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3,"Last Name must contain atleast three characters..."]
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail,"Please provide a valid email..."]
    },
    phone:{
        type: String,
        required: true,
        minLength: [11,"Phone number must contain exact 11 digits"],
        maxLength: [11,"Phone number must contain exact 11 digits"]
    },
    message:{
        type: String,
        required: true,
        minLength: [10,"Message must contain atleast 10 characters..."]
    }
})

export const Message=mongoose.model("Message",messageSchema);