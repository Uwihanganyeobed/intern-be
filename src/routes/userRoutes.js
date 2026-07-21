const express = require('express')
const { getUsers, createUser,getUsersProducts } = require('../controller/userController')

const router = express.Router()




router.get('/',getUsers)
router.post('/',createUser)
router.get('/products',getUsersProducts)

module.exports = router