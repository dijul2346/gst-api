import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";

const router = Router();

router.post("/", createUser);
router.get("/", getUsers);

export default router;

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email]
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Dijul2"
 *               email:
 *                 type: string
 *                 example: "dijul2@example.com"
 *     responses:
 *       201:
 *         description: User created
 */


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all users
 */


