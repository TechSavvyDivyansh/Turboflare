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



export const DeleteUser=async(req,res,next)=>{
    try {
        let userId=req.params.id
        const deletedUser=await User.findByIdAndDelete(userId)
        if(!deletedUser)
        {
           return res.status(400).json({success:false,message:"No user found"})
        }
        res.status(200).json({success:true,message:"User Deleted Sucessfully"})


    } catch (error) {
        next(error)
    }
}