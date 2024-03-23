import User from "../models/user.model.js"

export const UserData=async(req,res,next)=>{
    try {
        let userData=await User.find({},{password:0})
        if(!userData|| userData.length === 0)
        {
            res.status(201).json({message:"No Users found"})
        }
        else
        {
            res.status(200).json(userData)
        }
    } catch (error) {
        next(error)
    }
}