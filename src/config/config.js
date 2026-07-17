require('dotenv').config()

const config ={
    PORT: process.env.PORT || 5000,
    APP_NAME:"Simple Express App"
}

module.exports = config;