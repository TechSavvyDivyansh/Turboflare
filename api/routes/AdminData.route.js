import express from 'express'
import { DeleteUser, UserData, updateAdminData ,TeamData} from '../controllers/AdminData.controller.js'
import { verifyToken } from "../utils/verifyUser.js";

const router=express.Router()

router.get('/userData',UserData)
router.delete('/deleteUser/:id',DeleteUser)

router.patch('/updateAdmin/:id',verifyToken,updateAdminData)

router.get('/teamData',TeamData)

export default router