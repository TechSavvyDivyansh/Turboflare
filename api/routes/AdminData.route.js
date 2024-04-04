import express from 'express'
import { DeleteUser, UserData, updateAdminData ,TeamData, ToggleAdmin} from '../controllers/AdminData.controller.js'
import { verifyToken } from "../utils/verifyUser.js";

const router=express.Router()

router.get('/userData',UserData)
router.delete('/deleteUser/:id',DeleteUser)

router.patch('/updateAdmin/:id',verifyToken,updateAdminData)

router.get('/teamData',TeamData)

router.patch('/toggle-admin/:id',ToggleAdmin)

export default router