import express from 'express';
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from '../controllers/productControllers.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

//@description  Fetch all products
//@route  GET /api/products
//@access PUBLIC
router.route('/').get(getProducts).post(protect, admin, createProduct);

//@description  Fetch single product
//@route  GET /api/products/:id
//@access PUBLIC
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
