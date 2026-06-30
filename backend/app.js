import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import feedbackRoutes from "./routes/excel/feeback.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/feedback", feedbackRoutes);

// health check
app.get("/", (req, res) => {
  res.send("Backend is running");
});

export default app;