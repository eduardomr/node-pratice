const mongoose = require('mongoose')

const connectToDatabase = async () => {
    try {
        mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejspratice.uywwdkf.mongodb.net/?retryWrites=true&w=majority`)
        console.log('Conexão com banco de dados realizada com sucesso!')      
    }

    catch(error){
        console.log('Falha ao se conectar com o banco de dados', error)
        process.exit();

    }
}

module.exports = connectToDatabase