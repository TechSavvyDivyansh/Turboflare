import carListing from '../models/Listing.model.js'

export const createCar=async(req,res,next)=>{
    try {
        const listing=await carListing.create(req.body)
        return res.status(201).json(listing)
        
        
    } catch (error) {
        next(error)
    }
}

export const createVariant=async(req,res,next)=>{
    try {
        
        const carId=req.body.id
        const variantData=req.body.variantData

        const car=await carListing.findById(carId)
        if(!car)
        {
            return res.status(404).json({ error: 'Car not found' });
        }

        car.variants.push(variantData);
        await car.save();
        res.status(200).json({ message: 'Variant added successfully' });

    } catch (error) {
        next(error)
    }
}


export let showCarData=async(req,res,next)=>{
        try {
            let carData=await carListing.find({})
            res.status(201).json(carData)
        } catch (error) {
            next(error)
        }
}

export let deleteListing=async(req,res,next)=>{
        try {
            let id=req.params.id
            let DeletedListing=await carListing.findByIdAndDelete(id)
            res.status(201).json(DeletedListing)

        } catch (error) {
            next(error)
        }   
}


export let getSelectedCar=async(req,res,next)=>{
    try {
        
        let car=await carListing.findById(req.params.id)
        res.status(202).json(car)

    } catch (error) {
        next(error)
    }

}


export let updateListing=async(req,res,next)=>{
    try {
        let listing=await carListing.findById(req.params.id)
        if(!listing)
        {
            console.log("no listing found");
        }

        const updatedListing=await carListing.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(updatedListing)

    } catch (error) {
        next(error)
    }
    
}