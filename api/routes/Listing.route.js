import express from "express";
import { createListing } from "../controllers/Listing.controller.js";


let router=express.Router()

router.post('/create-listing',createListing)


export default router 