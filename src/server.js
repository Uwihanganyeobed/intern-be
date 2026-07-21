const app = require('./app')

const {config} = require('./config/config')

app.listen(config.PORT,()=>{
    console.log('server is live on ', config.PORT)
})