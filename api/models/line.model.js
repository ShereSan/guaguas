const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const LineModel = sequelize.define('line', {
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true

    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }

})

module.exports = LineModel 