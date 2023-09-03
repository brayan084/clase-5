require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/usuarios', require('./routes/usuarios'));
app.use('/auth', require('./routes/auth'));
app.use('/role', require('./routes/role'));

app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo en el puerto " + process.env.PORT);
}) 
