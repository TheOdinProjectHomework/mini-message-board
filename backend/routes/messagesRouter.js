import express from "express"
import { getMessages, createMessage } from "../controllers/messagesControllers.js";

const messagesRouter = express.Router();

messagesRouter.get("/all", getMessages);
messagesRouter.post("/new", createMessage);

export default messagesRouter;