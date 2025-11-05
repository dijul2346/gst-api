import { Router } from 'express';
import {
  createProduct,
  checkProductPrice,
  getProducts
} from '../controllers/product.controller.js';

const router = Router();

// Route to create a new product (e.g., POST /products)
router.post('/', createProduct);

// Route to check a product's price (e.g., POST /products/check-price)
router.post('/check-price', checkProductPrice);
router.get('/', getProducts);
export default router;