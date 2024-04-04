import express from "express";
import { createCar, deleteListing, getSelectedCar, showCarData, updateListing } from "../controllers/Listing.controller.js";


let router=express.Router()

router.post('/create-car',createCar)
router.get('/get-cars',showCarData)
router.delete('/delete-car/:id',deleteListing)
router.get('/get-selected-car/:id',getSelectedCar)
router.patch('/update-car/:id',updateListing)


export default router 