const express = require('express')

const router = express.Router()


const {getProducts,createProduct, getOneProduct, updateOneProduct, deleteOneProduct} = require('../controller/productController')
const verifyToken = require('../middleware/verifyToken')
const checkPermission = require('../middleware/checkPermission')

router.get('/',verifyToken,getProducts)
router.post('/',verifyToken, checkPermission('admin'), createProduct)
router.get('/:id', getOneProduct)
router.put('/:id', updateOneProduct)
router.delete('/:id', deleteOneProduct)

module.exports = router