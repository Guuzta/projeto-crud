//fazer a conexão com o banco de dados
const mongoose = require('mongoose')

function connect () {
    mongoose.connect('mongodb://localhost:27017/projeto-crud')

    const db = mongoose.connection
    db.once('open', () => {
        console.log('Conectou no banco de dados')
    })

    db.on('error', console.error.bind(console, 'conection error:'))
}

module.exports = {
    connect,
}