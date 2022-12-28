const mongoose = require('mongoose');

const dbConnection = async() => {
    console.log(process.env.MOGODB_CNN)
    try {
       await mongoose.set("strictQuery", false);
       await mongoose.connect(process.env.MOGODB_CNN);
       console.log('Base de datos online');
    } catch (error) {
        throw new Error('Error a la hora de iniciar la base de datos');
    }
};

module.exports = {
    dbConnection
}