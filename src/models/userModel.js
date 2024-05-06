import mongoose from "mongoose";

const user=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        unique:true,
        
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        

    },
    password:{
        type:String,
        required:[true,"password is required"],
        
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date


})

const User=mongoose.models.users||mongoose.model("users",user)

export default User;
