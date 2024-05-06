import mongoose from "mongoose";

export async function connect(){
    try{
      mongoose.connect(process.env.MONGO_URI!);
      const connection=mongoose.connection;
      connection.on('connected',()=>{
        console.log("sucessfully connected");
      })
      connection.on("error",(err)=>{
        console.log("not connected"+err);
        process.exit();
      })

    }
    catch(error){
        console.log("something is wrong here");
        console.log(error);
    }
}