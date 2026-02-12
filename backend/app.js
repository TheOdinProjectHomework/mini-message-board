import express from "express"
import messagesRouter from "./routes/messagesRouter.js";
import cors from "cors"
import path from 'path';

const app = express();
const __dirname = path.resolve();
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get((req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  })
}

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Listening on port: ", PORT);
})