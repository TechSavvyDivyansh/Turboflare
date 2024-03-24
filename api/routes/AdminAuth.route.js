import express from 'express'
import { AdminLogin, AdminSignup } from '../controllers/AdminAuth.controller.js'

let router=express.Router()

router.post('/sign-up',AdminSignup)
router.post('/login',AdminLogin)

export default router 