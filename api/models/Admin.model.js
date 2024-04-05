import mongoose from "mongoose";


const adminSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true 
    },
    phone:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    designation:{
        type:String
    },
    avatar:{
        type:String,
        default:"https://img.freepik.com/premium-photo/anime-boy-man-avatar-ai-generative-art_225753-7456.jpg"
    },
    isEnabled:{
        type:Boolean,
        default:true 
    }
},{timestamps:true})

const Admin=mongoose.model('Admin',adminSchema)
export default Admin 