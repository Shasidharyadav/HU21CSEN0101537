const express = require('express');
const { getProducts } = require('../controllers/productController');  
const router = express.Router();

router.get('/:categoryname/products', getProducts);

module.exports = router;
