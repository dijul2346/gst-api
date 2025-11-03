import type { Request, Response } from "express";
import Transaction from "../models/transaction.model.js";
import TaxCategory from "../models/taxCategory.model.js";

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const { userId, categoryId, amount } = req.body;

    // Validate input
    if (!userId || !categoryId || !amount) {
      return res.status(400).json({ message: "userId, categoryId & amount required" });
    }

    // Fetch tax category
    const category = await TaxCategory.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Tax Category not found" });
    }

    // Calculate GST
    const taxRate = category.rate; // from DB
    const gstAmount = (amount * taxRate) / 100;
    const totalAmount = amount + gstAmount;

    // Save transaction
    const transaction = await Transaction.create({
      userId,
      categoryId,
      amount,
      gstAmount,
      totalAmount
    });

    return res.status(201).json({
      message: "Transaction created",
      transaction
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error", error: err });
  }
};
