import express from "express"
import messagesRouter from "./routes/messagesRouter.js";
const app = express();

app.use("/messages", messagesRouter);
app.get("/", (req, res) => {
    res.send("Hello world");
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Listening on port: ", PORT);
})