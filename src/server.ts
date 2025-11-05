import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import taxRoutes from "./routes/taxCategory.routes.js";
import trxRoutes from "./routes/transaction.routes.js";
import { connectDB } from "./config/db.js";
import { swaggerDocs } from "./config/swagger.js";
import productRoutes from './routes/product.routes.js';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

swaggerDocs(app,Number(PORT));

connectDB();

app.use("/users", userRoutes);
app.use("/categories", taxRoutes);
app.use("/transactions", trxRoutes);
app.use('/products',productRoutes );
app.use(cors());
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
