import type { Request, Response } from 'express';
import Product from '../models/product.model.js';
import TaxCategory from '../models/taxCategory.model.js';

// --- Function to create a new product ---
export const createProduct = async (req: Request, res: Response) => {
  try {
    // User sends simple "taxCode" ("GST18"), not a long _id
    const { name, sku, basePrice, taxCode } = req.body;

    // 1. Find the TaxCategory by its simple code
    const category = await TaxCategory.findOne({ code: taxCode });
    if (!category) {
      return res.status(404).json({ message: 'Invalid taxCode' });
    }

    // 2. Create the product using the found category's _id
    const product = await Product.create({
      name,
      sku,
      basePrice,
      taxCategoryId: category._id, // Save the actual reference
    });

    res.status(201).json(product);
  } catch (error: any) {
    if (error.code === 11000) { // Handle duplicate SKU
      return res.status(400).json({ message: 'SKU already exists' });
    }
    res.status(400).json({ message: error.message });
  }
};

// --- Your "Check Price" route (using SKU) ---

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find().populate('taxCategoryId');
    res.status(200).json(products);
  } catch (error: any) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const checkProductPrice = async (req: Request, res: Response) => {
  try {
    const { sku, quantity = 1 } = req.body;
    const product = await Product.findOne({ sku }).populate('taxCategoryId');

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const taxRate = (product.taxCategoryId as any).rate;
    const basePrice = product.basePrice * quantity;
    const gstAmount = (basePrice * taxRate) / 100;
    const totalAmount = basePrice + gstAmount;

    res.status(200).json({
      productName: product.name,
      sku: product.sku,
      quantity,
      basePrice,
      taxRate,
      gstAmount,
      totalAmount,
    });
  } catch (error: any) {
    res.status(500).json({ message: 'Server error', error });
  }
};