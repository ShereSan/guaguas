const router = require('express').Router()
const { 
    createLine 
} = require('../controllers/line.controller')

router.post('/', createLine)

module.exports = router