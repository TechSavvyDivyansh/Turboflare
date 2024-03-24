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
        default:"https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
    }
},{timestamps:true})

const Admin=mongoose.model('Admin',adminSchema)
export default Admin 