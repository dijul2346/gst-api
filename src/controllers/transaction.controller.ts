import type { Request, Response } from 'express';
import Transaction from '../models/transaction.model.js';
import Product from '../models/product.model.js'; // Import Product model
import TaxCategory from '../models/taxCategory.model.js';

// --- Define the expected request body ---
interface ItemInput {
  sku: string;
  quantity: number;
}
interface CreateTransactionBody {
  userId: string;
  items: ItemInput[];
}

export const createTransaction = async (
  req: Request<object, object, CreateTransactionBody>,
  res: Response
) => {
  try {
    const { userId, items } = req.body;

    if (!userId || !items || items.length === 0) {
      return res
        .status(400)
        .json({ message: 'userId and a non-empty items array are required' });
    }

    let totalSubtotal = 0;
    let totalGstAmount = 0;
    let finalTotalAmount = 0;
    const processedItems = [];

    // Loop over each item to find it by SKU
    for (const item of items) {
      const product = await Product.findOne({ sku: item.sku }).populate(
        'taxCategoryId'
      );

      if (!product) {
        return res
          .status(404)
          .json({ message: `Product with SKU not found: ${item.sku}` });
      }

      // Get data from product
      const taxRate = (product.taxCategoryId as any).rate;
      const basePrice = product.basePrice;
      const quantity = item.quantity;

      // Calculate totals for this line item
      const itemSubtotal = basePrice * quantity;
      const itemGstAmount = (itemSubtotal * taxRate) / 100;
      const itemTotalAmount = itemSubtotal + itemGstAmount;

      // Add to grand totals
      totalSubtotal += itemSubtotal;
      totalGstAmount += itemGstAmount;
      finalTotalAmount += itemTotalAmount;

      // Add to our new items array
      processedItems.push({
        sku: product.sku,
        name: product.name,
        quantity,
        basePrice,
        taxRate,
        gstAmount: itemGstAmount,
        totalAmount: itemTotalAmount,
      });
    }

    // Create the new transaction with all calculated data
    const transaction = await Transaction.create({
      userId,
      items: processedItems,
      totalSubtotal,
      totalGstAmount,
      finalTotalAmount,
    });

    return res.status(201).json({
      message: 'Transaction created',
      transaction,
    });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: 'Server error', error: err });
  }
};

// --- Updated getTransactionsByUser ---
export const getTransactionsByUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const transactions = await Transaction.find({ userId }).populate(
      'userId',
      'name email'
    );

    if (transactions.length === 0) {
      return res
        .status(404)
        .json({ message: 'No transactions found for this user' });
    }

    res.status(200).json({
      count: transactions.length,
      transactions,
    });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// --- Your original getTransactions function ---
export const getTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await Transaction.find().populate("userId");
    return res.status(200).json({ transactions });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: "Server error", error: err });
  }
};