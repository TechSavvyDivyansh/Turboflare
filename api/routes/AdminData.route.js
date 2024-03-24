import express from 'express'
import { DeleteUser, UserData } from '../controllers/AdminData.controller.js'

const router=express.Router()

router.get('/userData',UserData)
router.delete('/deleteUser/:id',DeleteUser)

export default router