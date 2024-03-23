import express from 'express'
import { UserData } from '../controllers/AdminData.controller.js'

const router=express.Router()

router.get('/userData',UserData)

export default router