import { createUser, findUserByEmail, finduserByEmailAndPass } from "../../dals/user.dal";
import { Iuser } from "../../interface/user.interface";


export const registerUser  = async (data: Iuser)  =>{

    const existing = await findUserByEmail(data.email)

    if(existing){
        throw new Error("User already exists")
    }

    console.log("existing",existing)

    try{
        const res = await createUser(data)
        return res;
    }catch(error:any){
        throw new Error(error.message)
    }
}

export const loginUser = async (email:string,password:string) =>{
    const user = await finduserByEmailAndPass(email,password);

    if(!user){
        throw new Error("Invalid email or password!")
    }

    return ("Login successful");
}