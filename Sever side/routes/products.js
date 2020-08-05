const express = require('express');
const router = express.Router();
const request = require('request');
const {products_ar} = require('../apiService/apiService')

router.get('/', (req, res, next) => {
res.json(products_ar);
});


module.exports = router;

