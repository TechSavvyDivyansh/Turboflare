import mongoose from "mongoose";


const variantSchema=mongoose.Schema({
    variantName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    adas:{
        type:Boolean,
        required:true
    },
    adrenox:{
        type:Boolean,
        required:true
    },
    manual:{
        type:Boolean,
        required:true
    },
    automatic:{
        type:Boolean,
        required:true
    },
    fuel:{
        type:String,
        required:true
    }

})

const carSchema=mongoose.Schema({
    carNo:{
        type:Number,
        required:true
    },
    carName:{
        type:String,
        required:true
    },
    carDesc:{
        type:String,
        required:true
    },
    carType:{
        type:String,
        required:true
    },
    driveType:{
        type:String,
        required:true
    },
    claimMileage:{
        type:Number,
        required:true
    },
    horsePower:{
        type:Number,
        required:true
    },
    imageUrls:{
        type:Array,
        required:true
    },
    variants:[variantSchema]
    

},{timestamps:true})

const carListing=new mongoose.model('CarListing',carSchema)

export default carListing