import { Router } from "express";
import { createTaxCategory, getTaxCategories } from "../controllers/taxCategory.controllers.js";

const router = Router();

router.post("/add", createTaxCategory);
router.get("/get", getTaxCategories);

export default router;
