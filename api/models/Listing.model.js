import mongoose from "mongoose";


const variantSchema=mongoose.Schema({
    variantName:{
        type:String
    },
    price:{
        type:Number
    },
    adas:{
        type:Boolean
    },
    adrenox:{
        type:Boolean
    },
    manual:{
        type:Boolean
    },
    automatic:{
        type:Boolean
    },
    fuel:{
        type:String
    }

})

const carSchema=mongoose.Schema({
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