// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import helmet from "helmet";
// import rateLimit from "express-rate-limit";
// import dotenv from "dotenv";
// import authRoutes from "./routes/auth.js";
// import userRoutes from "./routes/user.js";
// import { errorHandler } from "./middleware/errorHandler.js";

// dotenv.config();

// const app = express();

// // Security middleware
// app.use(helmet());
// app.use(
//   cors({
//     origin:
//       process.env.NODE_ENV === "production"
//         ? "https://intellisearch-sshn.onrender.com"
//         : "http://localhost:5173",
//     credentials: true,
//   })
// );

// // Rate limiting
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // limit each IP to 100 requests per windowMs
//   message: "Too many requests from this IP, please try again later.",
// });
// app.use(limiter);

// // Body parsing middleware
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true }));

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("MongoDB connected successfully"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/user", userRoutes);

// // Health check
// app.get("/api/health", (req, res) => {
//   res.json({ message: "Server is running!" });
// });

// // Error handling middleware
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

// Security middleware
app.use(helmet());

// ✅ CORS setup for multiple environments
const allowedOrigins = [
  "http://localhost:5173", // local dev
  "https://intellisearch-sshn.onrender.com", // deployed frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow REST tools or server-to-server calls with no origin
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ message: "Server is running!" });
});

// Error handling middleware
app.use(errorHandler);

// Handle undefined routes (avoid confusing 404 on CORS preflights)
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("NODE_ENV =", process.env.NODE_ENV);
});
