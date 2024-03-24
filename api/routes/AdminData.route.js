import express from 'express'
import { DeleteUser, UserData, updateAdminData } from '../controllers/AdminData.controller.js'
import { verifyToken } from "../utils/verifyUser.js";

const router=express.Router()

router.get('/userData',UserData)
router.delete('/deleteUser/:id',DeleteUser)

router.patch('/updateAdmin/:id',verifyToken,updateAdminData)

export default router