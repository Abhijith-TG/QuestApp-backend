import express from 'express'
import { loginUserController, registerUserController } from '../contollers/user.controler';

const router = express.Router();

router.post("/register", registerUserController)
router.post("/login",loginUserController)


export default router;
