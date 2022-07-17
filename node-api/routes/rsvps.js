import express from "express";
import {getRsvps, createRsvps, findRsvp} from "../controllers/rsvpsController.js";

const router = express.Router();


router.get('/rsvps/get', getRsvps)
router.post('/rsvps/create', createRsvps)
router.get('/rsvps/find/:id', findRsvp)

export default router;