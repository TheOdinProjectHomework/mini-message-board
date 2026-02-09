import express from "express"
import { getMessages } from "../controllers/messagesControllers.js";

const messagesRouter = express.Router();

messagesRouter.get("/all", getMessages);

export default messagesRouter;