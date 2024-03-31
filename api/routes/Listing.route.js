import express from "express";
import { createCar, createVariant } from "../controllers/Listing.controller.js";


let router=express.Router()

router.post('/create-car',createCar)
router.post('/create-variant',createVariant)


export default router 