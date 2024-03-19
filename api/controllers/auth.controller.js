import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'

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