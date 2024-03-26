import express from 'express'
import { AdminLogin, AdminSignup, sendWelcomeEmail } from '../controllers/AdminAuth.controller.js'

let router=express.Router()

router.post('/sign-up',AdminSignup)
router.post('/login',AdminLogin)
router.post('/email',sendWelcomeEmail)

export default router 