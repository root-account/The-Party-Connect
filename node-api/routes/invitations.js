import express from "express";
import {getInvitations, createInvitations, findInvitation} from "../controllers/invitationsController.js";

const router = express.Router();


router.get('/invitations/get', getInvitations)
router.post('/invitations/create', createInvitations)
router.get('/invitations/find/:id', findInvitation)

export default router;