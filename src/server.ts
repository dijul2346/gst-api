import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/user.routes.js";
import taxRoutes from "./routes/taxCategory.routes.js";
import trxRoutes from "./routes/transaction.routes.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/categories", taxRoutes);
app.use("/api/transactions", trxRoutes);

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
