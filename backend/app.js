import express from "express"
import messagesRouter from "./routes/messagesRouter.js";
import cors from "cors"
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(cors());
app.use(express.json());

if(process.env.NODE_ENV !== "production") {
    app.use(
      cors({
        origin: "http://localhost:3001",
      }),
    );
}

app.use("/messages", messagesRouter);

if (process.env.NODE_ENV === "production") {
  const distPath = path.join(__dirname, "../frontend/dist");

  app.use(express.static(distPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  })
}

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Listening on port: ", PORT);
})