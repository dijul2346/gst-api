import type { Request, Response } from "express";
import Transaction from "../models/transaction.model.js";

export const createTransaction = async (req: Request, res: Response) => {
  const txn = await Transaction.create(req.body);
  res.status(201).json(txn);
};

export const getTransactions = async (_: Request, res: Response) => {
  const txns = await Transaction.find().populate("userId categoryId");
  res.json(txns);
};
