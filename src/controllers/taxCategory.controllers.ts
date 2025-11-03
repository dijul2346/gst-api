import type{ Request, Response } from "express";
import TaxCategory from "../models/taxCategory.model.js";

export const createTaxCategory = async (req: Request, res: Response) => {
  const category = await TaxCategory.create(req.body);
  res.status(201).json(category);
};

export const getTaxCategories = async (_: Request, res: Response) => {
  const categories = await TaxCategory.find();
  res.json(categories);
};
