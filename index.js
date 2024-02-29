require('dotenv').config()
const express = require('express') // requerimos express


const api = express()


api.listen(process.env.PORT, (err) => {
    if (err) throw new Error('Cannot star API')

    console.log('*'.repeat(50))
    console.log(`Guaguas API Running on port ${process.env.PORT}`)
    console.log('*'.repeat(50))
})