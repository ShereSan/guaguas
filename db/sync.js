const UserModel = require("../api/models/user.model")
const LineModel = require("../api/models/line.model")


const dbSync = async () => {
    try{
         //await  UserModel.sync()
         await  LineModel.sync()
         //console.log('DB Sync succesful')

    }catch(err){
        throw new Error(error)
    }
}
module.exports = dbSync