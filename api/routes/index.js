const router = require('express').Router()
const AuthRouter = require('./auth.routes')// importamos
const LineRouter = require('./line.routes')

//endpoints
router.use('/auth',AuthRouter)
router.use('/line',LineRouter)






module.exports = router
