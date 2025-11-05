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
 *     description: Manage GST slabs and tax categories
 * */

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
 *               - code
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TaxCategory'
 *       400:
 *         description: Bad request (e.g., code not unique)
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
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TaxCategory'
 */

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Update an existing tax category
 *     tags:
 *       - Tax Categories
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the tax category to update
 *         example: "690af106ff799d0ed481a8c9"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "GST 28% (Revised)"
 *               rate:
 *                 type: number
 *                 example: 28.5
 *     responses:
 *       200:
 *         description: Category updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TaxCategory'
 *       404:
 *         description: Category not found
 */

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Delete a tax category
 *     tags:
 *       - Tax Categories
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the tax category to delete
 *         example: "690af106ff799d0ed481a8c9"
 *     responses:
 *       200:
 *         description: Category deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Category deleted"
 *       404:
 *         description: Category not found
 */