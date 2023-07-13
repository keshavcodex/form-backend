import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Connection from "./db.js";
import Routes from "./routes/route.js";
import cors from "cors";

dotenv.config();
Connection(process.env.MONGO_URL);

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/", Routes);
