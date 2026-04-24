import { Iuser } from "../interface/user.interface"
import { User } from "../models/user.model"


export const createUser = async (data: Iuser) =>{
    return await User.create(data)
}

export const findUserByEmail = async (email: string) =>{
    return await User.findOne({email})
}

export const finduserByEmailAndPass = async (email:string, password:string) =>{
    return await User.findOne({email,password})
}