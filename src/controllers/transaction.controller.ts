
import Transaction from "../models/transaction.model.js";
import type { Request, Response } from "express";
import User from "../models/user.model.js";
import TaxCategory from "../models/taxCategory.model.js";

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const { userId, categoryId, amount } = req.body;

    // Validate user
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Validate category
    const category = await TaxCategory.findById(categoryId);
    if (!category)
      return res.status(404).json({ message: "Tax category not found" });

    const rate = category.rate;

    // GST Calculation
    const taxAmount = (amount * rate) / 100;
    const totalAmount = amount + taxAmount;

    // Create transaction
    const transaction = await Transaction.create({
      userId,
      categoryId,
      amount,
      taxAmount,
      totalAmount,
    });

    res.status(201).json({
      message: "Transaction recorded successfully",
      transaction,
    });
  } catch (err) {
    res.status(500).json({ message: "Error creating transaction", error: err });
  }
};
