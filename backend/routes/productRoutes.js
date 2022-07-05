import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const router = express.Router();

//@description  Fetch all products
//@route  GET /api/products
//@access PUBLIC
router.get(
  '/',
  asyncHandler(async (req, res) => {
    // mongoose middle ware express async handler
    const products = await Product.find({}); // mongoose func returns promise
    res.json(products);
  })
);

//@description  Fetch single product
//@route  GET /api/products/:id
//@access PUBLIC
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      return res.status(404).json({ message: 'Product not found' });
    }
  })
);

export default router;
