const express = require('express')

const router = express.Router()


const {getProducts,createProduct, getOneProduct} = require('../controller/productController')

router.get('/',getProducts)
router.post('/',createProduct)
router.get('/:id', getOneProduct)

module.exports = router