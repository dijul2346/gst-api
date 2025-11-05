import { Router } from "express";
import { 
  createTaxCategory, 
  getTaxCategories,
  updateTaxCategory,
  deleteTaxCategory 
} from "../controllers/taxCategory.controllers.js";

const router = Router();

router.get("/", getTaxCategories);
router.post("/", createTaxCategory);
router.put("/:id", updateTaxCategory);  
router.delete("/:id", deleteTaxCategory);

export default router;
/**
 * @swagger
 * tags:
 *   - name: Tax Categories
 *     description: Operations related to tax categories
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new tax category
 *     tags:
 *       - Tax Categories
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - rate
 *             properties:
 *               name:
 *                 type: string
 *                 example: "GST 18%"
 *               rate:
 *                 type: number
 *                 example: 18
 *               code:
 *                 type: string
 *                 example: "GST18"
 *     responses:
 *       201:
 *         description: Category created successfully
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all tax categories
 *     tags:
 *       - Tax Categories
 *     responses:
 *       200:
 *         description: List of tax categories
 */