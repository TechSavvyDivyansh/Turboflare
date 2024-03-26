import Admin from '../models/Admin.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'


export const AdminSignup=async(req,res,next)=>{
    const {name,email,username,password,phone,city,designation,avatar}=req.body
    const hashedPass=bcryptjs.hashSync(password,10)
    const newAdmin=new Admin({name,email,username,password:hashedPass,phone,city,designation,avatar})
    try {
        await newAdmin.save()
        res.status(201).json("Admin sent successfully for review!!😃")
    } catch (error) {
        next(errorHandler(550,"Error creating Admin"))
    }

} 



export const AdminLogin=async(req,res,next)=>{
    const {username,password}=req.body
    try {
        let validAdmin=await Admin.findOne({username})

        if(!validAdmin)
        {
            return next(errorHandler(401,"Admin not found!"))
        }
        else
        {
            const validPass=bcryptjs.compareSync(password,validAdmin.password)
            if(!validPass)
            {
                return next(errorHandler(402,"INVALID CREDENTIALS😡!!!"))
            }
            else
            {
                let {password,...restinfo}=validAdmin._doc
                const token=jwt.sign({id:validAdmin._id},process.env.JWT_SECRET)
                res.cookie('access_token',token,{httpOnly:true}).status(200).json(restinfo)
            }
        }
    } catch (error) {
        next(error)
    }

}


export let sendWelcomeEmail=async(req,res,next)=>{

    console.log(process.env.EMAIL,process.env.PASSWORD)

    try {
        let transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASSWORD
            }
        })
        
    
        let mailOptions={
            from:process.env.EMAIL,
            to:req.body.email,
            subject:req.body.subject,
            html:req.body.message 
        }

        transporter.sendMail(mailOptions,(error,info)=>{
            if(error)
            {
                console.log(error);
            }
            else
            {
                res.status(200).json(`message sent to ${info.messageId}`)
            }
        });
        

    } catch (error) {
        next(errorHandler(404,"Not able to send email"))
    }

    
}

