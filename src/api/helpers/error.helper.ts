import { Response } from "express";


export const ResponseMsg = async (res:Response,code:number,message:string,data?:any)=>{

    return res.status(code).json({
        success: code<400,
        message,
        data: data ?? null
    })
    
}