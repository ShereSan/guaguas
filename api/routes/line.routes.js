const router = require('express').Router()

const { checkAdmin } = require('./../middleware/checkAuth')

const { createLine } = require('../controllers/line.controller')

router.post('/', checkAdmin, createLine)

module.exports = router