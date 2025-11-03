import { Router } from "express";
import { createTaxCategory, getTaxCategories } from "../controllers/taxCategory.controllers.js";

const router = Router();

router.post("/", createTaxCategory);
router.get("/", getTaxCategories);

export default router;
