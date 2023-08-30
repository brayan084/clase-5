require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())


app.use(express.json())

app.use('/usuarios', require('./routes/usuario'))
app.use('/auth', require('./routes/auth'))

app.listen(process.env.PORT, () => { 
    console.log("Servidor escuchando en el puerto " + process.env.PORT)
})