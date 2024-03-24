import User from "../models/user.model.js"
import Admin from '../models/Admin.model.js'

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



export const updateAdminData=async(req,res,next)=>{
    
    if(req.user_id.id!==req.params.id)
    {
        return next(errorHandler(401,"You can only update your own account"))
    }
    try {
        if(req.body.password)
        {
            req.body.password=bcryptjs.hashSync(req.body.password,10)
        }
        const updatedAdmin=await Admin.findByIdAndUpdate(req.params.id,{
            $set:{
                name:req.body.name,
                email:req.body.email,
                username:req.body.username,
                password:req.body.password,
                phone:req.body.phone,
                designation:req.body.designation,
                avatar:req.body.avatar
            }
        },{new:true})

        const {password,...restinfo}=updatedAdmin._doc
        res.status(200).json(restinfo)


    } catch (error) {
        next(error)
    }

}