import express from "express";
import {getComments, createComments, findComment} from "../controllers/commentsController.js";

const router = express.Router();


router.get('/comments/get', getComments)
router.post('/comments/create', createComments)
router.get('/comments/find/:id', findComment)

export default router;