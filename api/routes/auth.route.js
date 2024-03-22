import express from "express";
import { login, signOut, signUp } from "../controllers/auth.controller.js";


const router=express.Router()

router.post('/signup',signUp)
router.post('/login',login)
router.get('/signout',signOut)

export default router