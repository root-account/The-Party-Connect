import express from "express";
import {getEvents, createEvents, findEvent, findUserEvents, eventsFeed} from "../controllers/eventsController.js";

const router = express.Router();


router.get('/events/get', getEvents)
router.post('/events/create', createEvents)
router.get('/events/find/:id', findEvent)
router.get('/events/user/:id', findUserEvents)
router.get('/events/feed/', eventsFeed)



export default router;