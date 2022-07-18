import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';

import userRouter from "./routes/users.js"
import eventsRouter from "./routes/events.js"
import authenticationRouter from "./routes/authentication.js"
import invitationsRouter from "./routes/invitations.js"
import messagingRouter from "./routes/messaging.js"
import notificationsRouter from "./routes/notifications.js"
import rsvpsRouter from "./routes/rsvps.js"
import commentsRouter from "./routes/comments.js"
import searchRouter from "./routes/search.js"

import connection from "./connection.js"


const app = express();
app.use(cors())

app.use(bodyParser.json());


app.use('/api', userRouter);
app.use('/api', eventsRouter);
app.use('/api', searchRouter);
app.use('/api', authenticationRouter);
app.use('/api', invitationsRouter);
app.use('/api', messagingRouter);
app.use('/api', notificationsRouter);
app.use('/api', rsvpsRouter);
app.use('/api', commentsRouter);


app.listen(4000, function(){
    console.log("Server is running...");
});