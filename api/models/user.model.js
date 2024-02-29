const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const UserModel = sequelize.define('user', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol: {
        type: DataTypes.STRING,
        defaultValue: 'user',
        validate: {
            isIn:[[undefined, 'admin', 'user']]
        }
    }
})


module.exports = UserModel 