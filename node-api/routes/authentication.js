import express from "express";
import {loginUser} from "../controllers/authenticationController.js";

const router = express.Router();

router.get('/auth/login', loginUser)
// router.post('/auth/create', createUsers)
// router.get('/auth/find/:id', findUser)

export default router;