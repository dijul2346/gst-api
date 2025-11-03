import type { Request, Response } from "express";
import Transaction from "../models/transaction.model.js";
import TaxCategory from "../models/taxCategory.model.js";

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const { userId, categoryId, amount } = req.body;

    if (!userId||!categoryId||!amount) {
      return res.status(400).json({ message:"userId, categoryId & amount required" });
    }


    const category = await TaxCategory.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message:"Tax Category not found" });
    }

    const taxRate=category.rate; 
    const gstAmount=(amount*taxRate) / 100;
    const totalAmount=amount+gstAmount;

    const transaction = await Transaction.create({
      userId,categoryId,amount,gstAmount,totalAmount
    });

    return res.status(201).json({
      message:"Transaction created",
      transaction
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message:"Server error",error: err });
  }
};

export const getTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await Transaction.find().populate("categoryId");
    return res.status(200).json({ transactions });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const getTransactionsByUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const transactions = await Transaction.find({ userId })
      .populate("categoryId", "name rate") 
      .populate("userId", "name email"); 

    if (transactions.length === 0) {
      return res.status(404).json({ message:"No transactions found for this user"});
    }

    res.status(200).json({ 
      count: transactions.length,
      transactions 
    });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ message: "Server error", error });
  }
};