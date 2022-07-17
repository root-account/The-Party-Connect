import express from "express";
import {getMessages, createMessages, findMessage} from "../controllers/messagingController.js";

const router = express.Router();


router.get('/messages/get', getMessages)
router.post('/messages/create', createMessages)
router.get('/messages/find/:id', findMessage)

export default router;