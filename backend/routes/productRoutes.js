import express from 'express';
import {
  getProducts,
  getProductById,
} from '../controllers/productControllers.js';

const router = express.Router();

//@description  Fetch all products
//@route  GET /api/products
//@access PUBLIC
router.route('/').get(getProducts);

//@description  Fetch single product
//@route  GET /api/products/:id
//@access PUBLIC
router.route('/').get(getProductById);

export default router;
