const LineModel = require('../models/line.model')


const createLine = async (req, res) => {
    try{
        const line = await LineModel.create(req.body)
        res.status(200).json(line)

    }catch (error) {
        console.log(error)
        res.status(500).send('Error cannot created line')
    }
}

module.exports = {
    createLine
}