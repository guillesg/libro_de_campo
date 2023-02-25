const mongoose = require('mongoose')

const connection = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect("mongodb://localhost:27017/libro_de_campo")
        
        console.log("Database connection established")

    } catch (error) {
        
        console.log(error)
        
        throw new Error('Connection failed -> ' + error.message)

    }
}

module.exports = {
    connection
}