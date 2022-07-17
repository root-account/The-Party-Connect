import express from "express";
import {getEvents, createEvents, findEvent} from "../controllers/eventsController.js";

const router = express.Router();


router.get('/events/get', getEvents)
router.post('/events/create', createEvents)
router.get('/events/find/:id', findEvent)

export default router;