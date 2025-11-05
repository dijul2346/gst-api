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
 * components:
 *   schemas:
 *     TaxCategory:
 *       type: object
 *       required:
 *         - name
 *         - rate
 *         - code
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated MongoDB ID
 *         name:
 *           type: string
 *           description: The name of the tax slab
 *         rate:
 *           type: number
 *           description: The tax percentage (e.g., 18)
 *         code:
 *           type: string
 *           description: A unique, simple code for the slab (e.g., "GST18")
 *         __v:
 *           type: number
 *           description: Mongoose version key
 *       example:
 *         _id: "690af106ff799d0ed481a8c9"
 *         name: "GST 28%"
 *         rate: 28
 *         code: "GST28"
 *         __v: 0
 *     NewTaxCategory:
 *       type: object
 *       required:
 *         - name
 *         - rate
 *         - code
 *       properties:
 *         name:
 *           type: string
 *           example: "GST 28%"
 *         rate:
 *           type: number
 *           example: 28
 *         code:
 *           type: string
 *           example: "GST28"
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
 *             $ref: '#/components/schemas/NewTaxCategory'
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