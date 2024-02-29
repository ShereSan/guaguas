require('dotenv').config()
const morgan = require('morgan') // informacion de las peticiones que llegan al server
const express = require('express') // requerimos express


const api = express()
api.use(morgan('dev'))
api.use(express.json())
api.get('/', (req,res) => res.send('Connected to Guaguas API'))

api.listen(process.env.PORT, (err) => {
    if (err) throw new Error('Cannot star API')

    console.log('*'.repeat(50))
    console.log(`Guaguas API Running on port ${process.env.PORT}`)
    console.log('*'.repeat(50))
})