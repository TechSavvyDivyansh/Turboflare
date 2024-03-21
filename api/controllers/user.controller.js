import { errorHandler } from "../utils/error.js"
import bcryptjs from 'bcryptjs'
import User from '../models/user.model.js'

export const updateUser=async(req,res,next)=>{
    if(req.user_id.id!==req.params.id)
    {
        return next(errorHandler(401,"You can only update your own account"))
    }
    try {
        if(req.body.password)
        {
            req.body.password=bcryptjs.hashSync(req.body.password,10)
        }
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{
            $set:{
                name:req.body.name,
                email:req.body.email,
                username:req.body.username,
                password:req.body.password,
                phone:req.body.phone,
                city:req.body.city,
                avatar:req.body.avatar
            }
        },{new:true})

        const {password,...restinfo}=updatedUser._doc
        res.status(200).json(restinfo)


    } catch (error) {
        next(error)
    }

}