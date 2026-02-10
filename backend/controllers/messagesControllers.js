import getAll from "../db.js";
import CustomNotFoundError from "../errors/CustomNotFoundError.js";
import { messages } from "../db.js";

export const getMessages = (req, res) => {
    try {
        const messages = getAll();
        
        if(!messages) {
            throw new CustomNotFoundError("Not msges found");
        }

        res.status(200).send(messages);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ "error": error.message })
    }
}

export const createMessage = (req, res) => {
    const { user, text } = req.body;
    res.status(200).send(messages);
    try {
        messages.push({ user, text, added: new Date });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: error.message });
    }
}