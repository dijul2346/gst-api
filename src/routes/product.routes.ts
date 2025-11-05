import { Router } from 'express';
import {
  createProduct,
  checkProductPrice,
  getProducts
} from '../controllers/product.controller.js';

const router = Router();

// Route to create a new product (e.g., POST /products)
router.post('/', createProduct);

router.post('/check-price', checkProductPrice);
router.get('/', getProducts);
export default router;

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Product management and price checking
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - sku
 *               - basePrice
 *               - taxCode
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Dell XPS 13 Laptop"
 *               sku:
 *                 type: string
 *                 example: "DELL-XPS-13"
 *               basePrice:
 *                 type: number
 *                 example: 95000
 *               taxCode:
 *                 type: string
 *                 example: "GST18"
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Bad request (e.g., SKU already exists, invalid taxCode)
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: A list of all products with their tax details
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   sku:
 *                     type: string
 *                   basePrice:
 *                     type: number
 *                   taxCategoryId:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       rate:
 *                         type: number
 *                       code:
 *                         type: string
 *             example:
 *               - _id: "60c72b9f1f1d9b001a8e4a3b"
 *                 name: "Dell XPS 13 Laptop"
 *                 sku: "DELL-XPS-13"
 *                 basePrice: 95000
 *                 taxCategoryId:
 *                   _id: "60c72b9f1f1d9b001a8e4a3c"
 *                   name: "GST 18%"
 *                   rate: 18
 *                   code: "GST18"
 */

/**
 * @swagger
 * /products/check-price:
 *   post:
 *     summary: Check a product's price with GST
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sku
 *             properties:
 *               sku:
 *                 type: string
 *                 example: "DELL-XPS-13"
 *               quantity:
 *                 type: number
 *                 example: 2
 *     responses:
 *       200:
 *         description: Price calculation successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 productName:
 *                   type: string
 *                 sku:
 *                   type: string
 *                 quantity:
 *                   type: number
 *                 basePrice:
 *                   type: number
 *                 taxRate:
 *                   type: number
 *                 gstAmount:
 *                   type: number
 *                 totalAmount:
 *                   type: number
 *             example:
 *               productName: "Dell XPS 13 Laptop"
 *               sku: "DELL-XPS-13"
 *               quantity: 2
 *               basePrice: 190000
 *               taxRate: 18
 *               gstAmount: 34200
 *               totalAmount: 224200
 *       404:
 *         description: Product not found
 */