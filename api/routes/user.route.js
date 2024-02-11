import express from 'express'
import { test } from '../controllers/user.contoller.js'
import { verifyToken } from '../utils/verifyUser.js'
import { updateUser } from '../controllers/user.contoller.js'

const router = express.Router()

router.get('/test',test)
router.put('/update/:userId',verifyToken,updateUser);

export default router