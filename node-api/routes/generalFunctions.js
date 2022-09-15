import express from "express";
import {getEvents, createEvents, findEvent, eventsFeed} from "../controllers/generalFunctionsController.js";

const router = express.Router();


router.get('/functions/navbar-counts', getNavbarCounts)
router.post('/functions/create', createEvents)
router.get('/functions/find/:id', findEvent)
router.get('/functions/feed/', eventsFeed)



export default generalFunctions;