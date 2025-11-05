import type { Request, Response } from "express";
import TaxCategory from "../models/taxCategory.model.js";

// ✅ UPDATED: Add error handling for the unique code
export const createTaxCategory = async (req: Request, res: Response) => {
  try {
    const { name, rate, code } = req.body;
    const category = await TaxCategory.create({ name, rate, code });
    res.status(201).json(category);
  } catch (error: any) {
    if (error.code === 11000) { // Handles duplicate 'code'
      return res.status(400).json({ message: "Tax 'code' must be unique" });
    }
    res.status(400).json({ message: error.message });
  }
};

export const getTaxCategories = async (_: Request, res: Response) => {
  const categories = await TaxCategory.find();
  res.json(categories);
};

// ✅ ADD THIS: Function to update a tax slab
export const updateTaxCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedCategory = await TaxCategory.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(updatedCategory);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// ✅ ADD THIS: Function to delete a tax slab
export const deleteTaxCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedCategory = await TaxCategory.findByIdAndDelete(id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ message: "Category deleted" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};