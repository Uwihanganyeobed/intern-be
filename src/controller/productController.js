const {db} = require('../config/config')

//CRUD operations for product table
//1. GET /// all products
const getProducts = (req,res)=>{
    const sql='SELECT * FROM products'
    db.query(sql,(err,results)=>{
        if(err){
            return res.status(500).json({
                success: false,
                message: "Error fetching products",err})
        }
        return res.status(200).json({
            success: true,
            message: "Products Fetched successfully",
            data: results})

    })

}

//POST insert a new product
//1. GET /// all products
const createProduct = (req,res)=>{
    const {prodName, prodCategory, prodPrice,userId} = req.body
    const sql=
    'INSERT INTO products (prodName, prodCategory, prodPrice,userId) VALUES (?,?,?,?)'
    db.query(sql,[prodName, prodCategory, prodPrice,userId],(err,results)=>{
        if(err){
            return res.status(500).json({
                success: false,
                message: "Error creating product",err})
        }
        return res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: results})

    })
}
const getOneProduct= (req,res)=>{
    const id =req.params.id
    const sql ='SELECT * from products where prodId =?'
    db.query(sql,[id],(err,results)=>{
        if(err){
            return res.status(500).json({
                success: false,
                message: "Error getting product",err})
        }
        return res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: results})

    })
}


const updateOneProduct = (req,res)=>{
    const {prodName, prodCategory, prodPrice} = req.body
    const id = req.params.id
    const sql=
    'UPDATE products SET prodName=? , prodCategory=?, prodPrice=? WHERE prodId= ?'
    db.query(sql,[prodName, prodCategory, prodPrice,id],(err,results)=>{
        if(err){
            return res.status(500).json({
                success: false,
                message: "Error updating product",err})
        }
        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: results})

    })
}


const deleteOneProduct= (req,res)=>{
    const id =req.params.id
    const sql ='DELETE FROM products where prodId =?'
    db.query(sql,[id],(err,results)=>{
        if(err){
            return res.status(500).json({
                success: false,
                message: "Error deleting product",err})
        }
        return res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: results})

    })
}

module.exports={getProducts, createProduct, getOneProduct,updateOneProduct,deleteOneProduct}