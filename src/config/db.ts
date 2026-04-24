import mongoose from "mongoose";


export const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MongoUrl as string);
        console.log("MongoDB connected");
    }catch(error){
        console.error("Failed to connec to DB",error);
        process.exit(1);
    }
}