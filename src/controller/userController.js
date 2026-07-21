const {db} = require('../config/config')

const getUsers = (req,res)=>{
    const sql = 'select * from users'
    db.query(sql,(err,results)=>{
        if(err){
            return res.status(500).json({
                success: false,
                message: "Error fetching users",err})
        }
        return res.status(200).json({
            success: true,
            message: "users Fetched successfully",
            data: results})

    })
}

const createUser= (req,res)=>{
    const {name, email, password,role} = req.body
    const sql=
    'INSERT INTO users (name, email, password,role) VALUES (?,?,?,?)'
    db.query(sql,[name, email, password,role],(err,results)=>{
        if(err){
            return res.status(500).json({
                success: false,
                message: "Error creating user",err})
        }
        return res.status(200).json({
            success: true,
            message: "user created successfully",
            data: results})

    })
}

const getUsersProducts=(req,res)=>{
    const sql ='SELECT users.name,users.email ,products.prodName,products.prodCategory,products.prodPrice FROM users INNER JOIN products ON users.id = products.userId'
    db.query(sql,(err,results)=>{
        if(err){
            return res.status(500).json({
                success: false,
                message: "Error fetching users products",err})
        }
        return res.status(200).json({
            success: true,
            message: "users products fetched successfully",
            data: results})

    })
}

module.exports= {getUsers, createUser, getUsersProducts}