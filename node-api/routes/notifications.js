import express from "express";
import {getNotifications, createNotifications, findNotification} from "../controllers/notificationsController.js";

const router = express.Router();


router.get('/notifications/get', getNotifications)
router.post('/notifications/create', createNotifications)
router.get('/notifications/find/:id', findNotification)

export default router;