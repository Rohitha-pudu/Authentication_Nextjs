import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest,NextResponse } from "next/server";


export async function POST(request:NextRequest){
    try{
        const reqBody=await request.json();
        const {username,email,password}=reqBody;
        console.log(reqBody);
        const user=await User.findOne({email});
        if(user){
            return NextResponse.json({
                message:"user already exits"
            },{status:500})
        }
        //hash password
        const salt=await bcryptjs.genSalt(10);
        const hashedPassword=await bcryptjs.hash(password,salt);

        //storing user
        const newUser=new User({
            email,
            username,
            password:hashedPassword
        })
        const savedUser=await newUser.save();
        console.log(savedUser);

        return NextResponse.json({
           message:"succesfully signed up",
           success:true,
           savedUser
        })



    }
    catch(error:any){
       return NextResponse.json({error:error.message},{status:500})

    }
}





connect()

