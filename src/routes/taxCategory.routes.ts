import { Router } from "express";
import { createTaxCategory, getTaxCategories } from "../controllers/taxCategory.controllers.js";


const router = Router();

router.get("/", getTaxCategories);
router.post("/", createTaxCategory);

export default router;

/**
 * @swagger
 * tags:
 *   name: Tax Categories
 */

/**
 * @swagger
 * /tax:
 *   post:
 *     summary: Create a tax category
 *     tags: [Tax Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, rate]
 *             properties:
 *               name:
 *                 type: string
 *               rate:
 *                 type: number
 *     responses:
 *       201:
 *         description: Tax category created
 */


/**
 * @swagger
 * /tax:
 *   get:
 *     summary: Get all tax categories
 *     tags: [Tax Categories]
 *     responses:
 *       200:
 *         description: List of tax categories
 */

