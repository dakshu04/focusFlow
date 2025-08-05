import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import authRoutes from "./routes/authRoutes";

import cors from "cors"

const allowedOrigins = [
  "http://localhost:5173",
  "https://focus-flow-rose.vercel.app"
  ];

  dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT!;

// Middleware
app.use(express.json());
app.use(cors({
  origin: allowedOrigins, // Your frontend port (Vite)
  credentials: true
}));

// Routes
app.use("/api/auth", authRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
