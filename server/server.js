import express from "express";
import "dotenv/config";
import { db } from "./libs/dbConnect.js";

import userRouter from "./routes/user.route.js";

const PORT = 8000;
const app = express();

app.use(express.json());

app.use("/api/v1/users", userRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
