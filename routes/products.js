const express = require('express');
const {
    getProducts,
    getProductsStatic
} = require('../controller/products');

const router = express.Router();

router.route('/').get(getProducts);

module.exports = router;