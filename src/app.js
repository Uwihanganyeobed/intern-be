const express = require('express');

const userRoutes   = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes')
const app = express()

app.use(express.json())

//api routes
app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);
app.use('/api/products',productRoutes)
    

module.exports= app