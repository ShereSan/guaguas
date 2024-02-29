require('dotenv').config()
const morgan = require('morgan') // informacion de las peticiones que llegan al server
const express = require('express') // requerimos express
const sequelize = require('./db')
const dbSync = require('./db/sync')

const api = express()

const dbCheck = async () => {
    try {
        await sequelize.authenticate()
        await dbSync()
        console.log('Connected to Guaguas DB')
    } catch (error) {
        throw new Error(error)
    }
}

api.use(morgan('dev'))
api.use(express.json())
api.get('/', (req, res) => res.send('Connected to Guaguas API'))
api.use('/api', require('./api/routes'))

api.listen(process.env.PORT, async (err) => {
    if (err) throw new Error('Cannot star API')
    console.log('*'.repeat(50))
    console.log(`Guaguas API Running on port ${process.env.PORT}`)
    await dbCheck()
    console.log('*'.repeat(50))

})