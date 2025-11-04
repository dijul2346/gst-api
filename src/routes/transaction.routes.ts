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
 *     summary: Create a new transaction and calculate GST
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - categoryId
 *               - amount
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "6908434c72f06d53b9b29349"
 *               categoryId:
 *                 type: string
 *                 example: "69098dc912d62c25c13f46b7"
 *               amount:
 *                 type: number
 *                 example: 25000
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
 *                   example: "Transaction created"
 *                 transaction:
 *                   type: object
 *                   properties:
 *                     userId:
 *                       type: string
 *                       example: "6908434c72f06d53b9b29349"
 *                     categoryId:
 *                       type: string
 *                       example: "69098dc912d62c25c13f46b7"
 *                     amount:
 *                       type: number
 *                       example: 25000
 *                     gstAmount:
 *                       type: number
 *                       example: 3000
 *                     totalAmount:
 *                       type: number
 *                       example: 28000
 *                     _id:
 *                       type: string
 *                       example: "69098e9012d62c25c13f46ba"
 */

/**
 * @swagger
 * /transactions:
 *   get:
 *     summary: Get all transactions
 *     tags: [Transactions]
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
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       userId:
 *                         type: string
 *                         example: "6908434c72f06d53b9b29349"
 *                       categoryId:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                           name:
 *                             type: string
 *                             example: "Electronics"
 *                           rate:
 *                             type: number
 *                             example: 18
 *                       amount:
 *                         type: number
 *                         example: 50000
 *                       gstAmount:
 *                         type: number
 *                         example: 9000
 *                       totalAmount:
 *                         type: number
 *                         example: 59000
 *                       createdAt:
 *                         type: string
 *                       updatedAt:
 *                         type: string
 */



/**
 * @swagger
 * /transactions/user/{userId}:
 *   get:
 *     summary: Get all transactions for a specific user
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         example: "6908434c72f06d53b9b29349"
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
 *                   example: 3
 *                 transactions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "69098e9012d62c25c13f46ba"
 *                       userId:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: "6908434c72f06d53b9b29349"
 *                           name:
 *                             type: string
 *                             example: "Dijul"
 *                           email:
 *                             type: string
 *                             example: "dijul@example.com"
 *                       categoryId:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: "69098dc912d62c25c13f46b7"
 *                           name:
 *                             type: string
 *                             example: "Mobile Phone"
 *                           rate:
 *                             type: number
 *                             example: 12
 *                       amount:
 *                         type: number
 *                         example: 25000
 *                       gstAmount:
 *                         type: number
 *                         example: 3000
 *                       totalAmount:
 *                         type: number
 *                         example: 28000
 *                       createdAt:
 *                         type: string
 *                       updatedAt:
 *                         type: string
 */


