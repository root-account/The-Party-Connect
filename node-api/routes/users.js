import express from "express";
import {getUsers, createUsers, findUser} from "../controllers/usersController.js";

const router = express.Router();


router.get('/users/get', getUsers)
router.post('/users/create', createUsers)
router.get('/users/find/:id', findUser)

export default router;