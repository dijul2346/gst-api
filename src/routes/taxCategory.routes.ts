import { Router } from "express";
import { createTaxCategory, getTaxCategories } from "../controllers/taxCategory.controllers.js";


const router = Router();

router.get("/", getTaxCategories);
router.post("/", createTaxCategory);

export default router;
