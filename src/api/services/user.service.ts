import { createUser, findUserByEmail, finduserByEmailAndPass } from "../../dals/user.dal";
import { Iuser } from "../../interface/user.interface";
import jwt from "jsonwebtoken"


export const registerUser  = async (data: Iuser)  =>{

    console.log(data)

    const existing = await findUserByEmail(data.email)

    // console.log("existing",existing)

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

    const token = jwt.sign(
        {
            id:user.id,
            email:user.email
        },
        process.env.JWT_SECRET as string,
        {
            expiresIn:"7d"
        }
    )


    return ({
        id:user.id,
        email: user.email,
        token
    });
}