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

const login=(req,res)=>{
    const {email,password}= req.body
    //check if user is in db
    const sql = 'SELECT * FROM users WHERE email = ?'
    db.query(sql,[email],async(err,results)=>{
        if(err){
             return res.status(500).json({
                success: false,
                message: "Error creating user",err})
        }
        if(results.length === 0){
              return res.status(500).json({
                success: false,
                message: "User Not found",err})
        }
        //hash password
        const passwordCompare = await bcrypt.compare(password,results[0].password)
        if(!passwordCompare){
             return res.status(500).json({
                success: false,
                message: "Invalid passwword",err})
        }

        const token = await jwt.sign({
            id: results[0].id,
            email: results[0].email,
            role: results[0].role,
        },'secretKey',{expiresIn: '1d'})

              return res.status(201).json({
                success: true,
                message: "Login successfull",
                auth_token : token})
        })

}

const logout=(req,res)=>{
    return res.status(200).json({
                success: true,
                message: "Logout successfull"
    })
}

const getprofile=(req,res)=>{

    const sql ='select * from users where email =?'
    db.query(sql,[req.user.email],(err,results)=>{

    if(err){
        return res.status(500).json({
                success: false,
                message: "UnAuthorized,plz login",
        })

    }
    return res.status(200).json({
                success: true,
                user: req.user,
                data: results
        })
      })
}

module.exports = {register,login,logout,getprofile}