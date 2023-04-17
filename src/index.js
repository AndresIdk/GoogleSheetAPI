const express = require('express')
const morgan = require('morgan')
const app = express()

// Middleware para analizar JSON
app.use(express.json())

// Middleware para registrar peticiones
app.use(morgan('dev'))

// Ruta de configuracion de la API
require('./apisheet')

app.listen(3000, () => {
    console.log('Servidor activo :D')
})

// Rutas - De la api

app.use(require('./routes/google_sheet'))

module.exports = app