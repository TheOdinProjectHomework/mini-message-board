import express from "express"
import messagesRouter from "./routes/messagesRouter.js";
import cors from "cors"
const app = express();
app.use(cors());
app.use(express.json());

if(process.env.NODE_ENV !== "production") {
    app.use(
      cors({
        origin: "http://localhost:5173",
      }),
    );
}

app.use("/messages", messagesRouter);
app.get("/", (req, res) => {
    res.send("Hello world");
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Listening on port: ", PORT);
})