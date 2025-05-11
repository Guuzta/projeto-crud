//criptografando uma senha
const bcrypt = require('bcrypt')

async function crypto (password) {
    const salt = await bcrypt.genSalt()

    const cryptoPassword = await bcrypt.hash(password, salt)

    return cryptoPassword
}

module.exports = {
    crypto,
}