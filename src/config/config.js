require('dotenv').config()
const mysql = require('mysql')

const config ={
    PORT: process.env.PORT || 5000,
    APP_NAME:"Simple Express App"
}

//db connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect((err)=>{
    if(err){
        console.log('db connection failed',err)
    }
    else{
        console.log('db connected')
    }
})

module.exports = { config, db };