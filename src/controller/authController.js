const {db} = require('../config/config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register=(req,res)=>{
    const {name,email,password,role}= req.body
    //check if user is in db
    const sql = 'SELECT * FROM users WHERE email = ?'
    db.query(sql,[email],async(err,results)=>{
        if(err){
             return res.status(500).json({
                success: false,
                message: "Error creating user",err})
        }
        if(results.length >0){
              return res.status(500).json({
                success: false,
                message: "User Already Registered",err})
        }
        //hash password
        const newHashedPassword = await bcrypt.hash(password,10)

        const insertSql = 'INSERT INTO users(name,email,password,role) VALUES (?,?,?,?)'
        db.query(insertSql,[name,email,newHashedPassword,role], async(err,results)=>{
            if(err){
             return res.status(500).json({
                success: false,
                message: "Error creating user",err})
        }
              return res.status(201).json({
                success: true,
                message: "User created successfully",
                data: results})
        })

    })
}

const login=(req,res)=>{}

const logout=(req,res)=>{}

const getprofile=(req,res)={}