import User from "../models/user.model.js"
import Admin from '../models/Admin.model.js'
import { errorHandler } from "../utils/error.js"
import bcryptjs from 'bcryptjs'

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


export const TeamData=async(req,res,next)=>{
    try {
        let teamData=await Admin.find({},{password:0})
        if(!teamData|| teamData.length === 0)
        {
            res.status(201).json({message:"No Admin found"})
        }
        else
        {
            res.status(200).json(teamData)
        }
    } catch (error) {
        next(error)
    }
}



export const ToggleAdmin=async(req,res,next)=>{
    try {
        
        const admin=await Admin.findById(req.params.id)
        if(!admin)
        {
            return res.status(404).json({ message: 'Admin not found' });
        }

        admin.isAdmin = !admin.isAdmin;
        await admin.save()
        return res.json({ message: `isAdmin rights toggled to ${admin.isAdmin?"super admin":"admin"}` });

    } catch (error) {
        next(error)
    }
}

export const ToggleDisable=async(req,res,next)=>{
    try {
        
        const admin=await Admin.findById(req.params.id)
        if(!admin)
        {
            return res.status(404).json({ message: 'Admin not found' });
        }

        admin.isEnabled = !admin.isEnabled;
        await admin.save()
        return res.json({ message: `admin ${admin.isEnabled?"enabled":"disabled"}` });


    } catch (error) {
        next(error)
    }
}