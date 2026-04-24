import { Request, Response } from "express";
import { Iuser } from "../../interface/user.interface";
import { loginUser, registerUser } from "../services/user.service";
import { ResponseMsg } from "../helpers/error.helper";


export const registerUserController = async (req:Request,res:Response) =>{


    const {username,email,password}:any = req.body;

    if(!username || !email || !password){
        return ResponseMsg(res,400,"username, email, password are required")
    }
    try {
        const response = await registerUser({username,email,password})
    
        return ResponseMsg(res,201,"Resgistration successful",response)
    } catch (error: any) {
        return ResponseMsg(res,409,error.message)
    }
}

export const loginUserController = async (req:Request,res:Response) => {

    const {email, password} = req.body;

    if(!email || !password){
        return ResponseMsg(res,400,"Username and password are required")
    }

    try {
        const response = await loginUser(email,password)

        return ResponseMsg(res,200,"Login successfull",response)

    } catch (error:any) {

        return ResponseMsg(res,401,error.message)
        
    }
}