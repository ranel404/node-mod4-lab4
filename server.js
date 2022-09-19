const express = require('express')
const router = require('./routes/indexRoute')

const app = express()

//config
app.use(express.urlencoded({extended: true}))
const PORT = process.env.PORT || 3000


//routes
app.use('/api', router)
app.use('/', (req,res)=>{
    res.sendFile(__dirname + '/client.html')
})

// listen
app.listen(PORT, ()=>{
    console.log(`server on port ${PORT}`);
})