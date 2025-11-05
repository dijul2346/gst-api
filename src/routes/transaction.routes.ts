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
 *     description: Transaction-related operations
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
 *                       example: "LT123"
 *                     quantity:
 *                       type: number
 *                       example: 1
 *     responses:
 *       201:
 *         description: Transaction created successfully
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
 *         example: "60c72b9f1f1d9b001a8e4a3b"
 *     responses:
 *       200:
 *         description: List of user transactions
 */