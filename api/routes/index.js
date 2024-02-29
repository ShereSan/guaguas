const router = require('express').Router()
const AuthRouter = require('./auth.routes')// importamos


//enpoints
router.use('/auth',AuthRouter)






module.exports = router
