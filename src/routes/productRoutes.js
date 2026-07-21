const express = require('express')

const router = express.Router()


const {getProducts,createProduct, getOneProduct, updateOneProduct, deleteOneProduct} = require('../controller/productController')

router.get('/',getProducts)
router.post('/',createProduct)
router.get('/:id', getOneProduct)
router.put('/:id', updateOneProduct)
router.delete('/:id', deleteOneProduct)

module.exports = router