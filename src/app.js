const express = require('express');

const userRoutes   = require('./routes/userRoutes');

const app = express()

app.use(express.json())

//api routes
app.use('/api/users',userRoutes);
// app.use('/api/products',productRoutes);


module.exports= app