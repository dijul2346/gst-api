import { Router } from "express";
import { createTaxCategory, getTaxCategories,updateTaxCategory, // ✅ Add this
  deleteTaxCategory } from "../controllers/taxCategory.controllers.js";


const router = Router();

router.get("/", getTaxCategories);
router.post("/", createTaxCategory);
router.put("/:id", updateTaxCategory);  
router.delete("/:id", deleteTaxCategory);
export default router;

/**
 * @swagger
 * tags:
 *   name: Tax Categories
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new tax category
 *     tags: [Tax Categories]
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
 *                 example: "Mobile Phone"
 *               rate:
 *                 type: number
 *                 example: 12
 *     responses:
 *       201:
 *         description: Category created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "69098dc912d62c25c13f46b7"
 *                 name:
 *                   type: string
 *                   example: "Mobile Phone"
 *                 rate:
 *                   type: number
 *                   example: 12
 *                 __v:
 *                   type: number
 *                   example: 0
 */




/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all tax categories
 *     tags: [Tax Categories]
 *     responses:
 *       200:
 *         description: List of tax categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "69098dc912d62c25c13f46b7"
 *                   name:
 *                     type: string
 *                     example: "Electronics"
 *                   rate:
 *                     type: number
 *                     example: 18
 *                   __v:
 *                     type: number
 *                     example: 0
 */


