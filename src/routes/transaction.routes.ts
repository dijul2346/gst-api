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
 *   name: Transactions
 */

/**
 * @swagger
 * /transactions:
 *   post:
 *     summary: Create transaction and calculate GST
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [userId, categoryId, amount]
 *             properties:
 *               userId: 
 *                 type: string
 *               categoryId:
 *                 type: string
 *               amount:
 *                 type: number
 *     responses:
 *       201:
 *         description: Transaction created with GST
 */


/**
 * @swagger
 * /transactions/user/{userId}:
 *   get:
 *     summary: Get all transactions for a user
 *     tags: [Transactions]
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of user transactions
 */

