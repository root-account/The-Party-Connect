import express from "express";
import {seachEvent} from "../controllers/searchController.js";

const router = express.Router();



router.get('/search/:term', seachEvent)

export default router;