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