const router = require('express').Router()
const AuthRouter = require('./auth.routes')// importamos
//const LineRouter = require('./line.routes')
const checkAuth = require('./../middleware/checkAuth')


//endpoints 
router.use('/auth',AuthRouter)
router.use('/line',checkAuth, require('./line.routes'))






module.exports = router
