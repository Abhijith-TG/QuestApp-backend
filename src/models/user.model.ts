import mongoose from "mongoose";
import { Iuser } from "../interface/user.interface";


const userSchema = new mongoose.Schema<Iuser>({
    username:{type:String, required:true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

export const User = mongoose.model<Iuser>("User",userSchema)