import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import authRoutes from "./routes/authRoutes";
import cors from "cors"

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT!;

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // Your frontend port (Vite)
  credentials: true
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
