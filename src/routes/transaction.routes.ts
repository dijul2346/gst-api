import { Router } from "express";
import { createTransaction, getTransactions, getTransactionsByUser } from "../controllers/transaction.controller.js";

const router = Router();

router.post("/", createTransaction);
router.get("/", getTransactions);
router.get("/user/:userId", getTransactionsByUser);

export default router;

/**
 * @swagger
 * tags:
 *   - name: Transactions
 *     description: Create and manage transactions
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Transaction:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         userId:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *             name:
 *               type: string
 *             email:
 *               type: string
 *         items:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               sku:
 *                 type: string
 *               name:
 *                 type: string
 *               quantity:
 *                 type: number
 *               basePrice:
 *                 type: number
 *               taxRate:
 *                 type: number
 *               gstAmount:
 *                 type: number
 *               totalAmount:
 *                 type: number
 *         totalSubtotal:
 *           type: number
 *         totalGstAmount:
 *           type: number
 *         finalTotalAmount:
 *           type: number
 *         createdAt:
 *           type: string
 *         updatedAt:
 *           type: string
 *       example:
 *         _id: "6908434c72f06d53b9b29349"
 *         userId:
 *           _id: "6908434c72f06d53b9b29349"
 *           name: "Dijul"
 *           email: "dijul@example.com"
 *         items:
 *           - sku: "MS-WL1"
 *             name: "Mouse - Wireless"
 *             quantity: 2
 *             basePrice: 800
 *             taxRate: 12
 *             gstAmount: 96
 *             totalAmount: 896
 *         totalSubtotal: 1600
 *         totalGstAmount: 192
 *         finalTotalAmount: 1792
 *         createdAt: "2025-11-05T17:00:00.000Z"
 *         updatedAt: "2025-11-05T17:00:00.000Z"
 */

/**
 * @swagger
 * /transactions:
 *   post:
 *     summary: Create a new transaction with multiple items
 *     tags:
 *       - Transactions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - items
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "60c72b9f1f1d9b001a8e4a3b"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - sku
 *                     - quantity
 *                   properties:
 *                     sku:
 *                       type: string
 *                       example: "MS-WL1"
 *                     quantity:
 *                       type: number
 *                       example: 2
 *     responses:
 *       201:
 *         description: Transaction created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 transaction:
 *                   $ref: '#/components/schemas/Transaction'
 */

/**
 * @swagger
 * /transactions:
 *   get:
 *     summary: Get all transactions
 *     tags:
 *       - Transactions
 *     responses:
 *       200:
 *         description: List of all transactions
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 transactions:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Transaction'
 */

/**
 * @swagger
 * /transactions/user/{userId}:
 *   get:
 *     summary: Get all transactions for a specific user
 *     tags:
 *       - Transactions
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: List of transactions for the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: number
 *                   example: 1
 *                 transactions:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Transaction'
 */

