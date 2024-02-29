const UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken')


const checkAuth = (req, res, next) => {
    try {
        if (!req.headers.authorization) return res.status(401).send('Unauthorized')

        jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET,
            async (err, payload) => {
                if (err) return res.status(401).send('Token not valid')
                const user = await UserModel.findOne({
                    where: {
                        email: payload.email
                    }
                })
                if (!user) return res.status(500).send('Unauthenticator')
                res.locals.user = user
                next()
            })
    } catch (error) {
        console.log(error)
        res.status(500).send('Unauthorized')
    }
}

const checkAdmin = (req, res, next) => {
    if (res.locals.user.rol !== 'admin') {
        return res.status(401).send('User not authorized')
    } else {
        next()
    }

}

module.exports = {checkAuth, checkAdmin}