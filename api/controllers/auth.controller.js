import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'
import jwt from 'jsonwebtoken'

export const signUp=async(req,res,next)=>{
    const {name,email,username,password,phone,city}=req.body
    const hashedPass=bcryptjs.hashSync(password,10)
    const newUser=new User({name,email,username,password:hashedPass,phone,city})


    try {
        await newUser.save()
        res.status(201).json("User created successfully!!😃")
    } catch (error) {
        next(errorHandler(550,"Error creating user😡"))
    }
}




export const login=async(req,res,next)=>{
    const {username,password}=req.body
    
    
    try {
        const validUser=await User.findOne({username})
        if(!validUser)
        {
            return next(errorHandler(401,"User not found😔!!"))
        }
        else
        {
            const validPass=bcryptjs.compareSync(password,validUser.password)
            if(!validPass)
            {
                return next(errorHandler(402,"INVALID CREDENTIALS😡!!!"))
            }
            else
            {
                let {password,...restinfo}=validUser._doc
                const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET)
                res.cookie('access_token',token,{httpOnly:true}).status(200).json(restinfo)
            }
        }
        

    } catch (error) {
        next(error)
    }
}