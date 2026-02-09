import express from "express"
import { getMessages } from "../controllers/messagesControllers.js";

const messagesRouter = express.Router();

messagesRouter.get("/new", getMessages);

export default messagesRouter;