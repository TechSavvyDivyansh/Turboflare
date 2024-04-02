import express from "express";
import { createCar, createVariant, deleteListing, showCarData } from "../controllers/Listing.controller.js";


let router=express.Router()

router.post('/create-car',createCar)
router.post('/create-variant',createVariant)
router.get('/get-cars',showCarData)
router.delete('/delete-car/:id',deleteListing)


export default router 