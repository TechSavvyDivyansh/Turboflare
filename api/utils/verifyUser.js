import { errorHandler } from "../utils/error.js"
import jwt from 'jsonwebtoken'

export const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token

    if(!token)
    {
        return next(errorHandler(403,"unauthorized Access!!🔐"))
    }

    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err)
        {
            return next(errorHandler(405,"Forbidden🚫"))
        }

        else
        {;
            req.user=user 
            next()
        }

    })

}