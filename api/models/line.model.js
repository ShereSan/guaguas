const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const LineModel = sequelize.define('line', {
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

module.exports = LineModel 