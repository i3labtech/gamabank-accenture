const dotenv = require('dotenv')

//TODO: Sempre da pra melhorar - Refatorem plmmdss
dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : process.env.NODE_ENV === 'development' ? '.env.development' : '.env'
})

module.exports = {
    env: process.env.NODE_ENV,
    secret: process.env.JWT_SECRET, //TOKEN JWT
    database : {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        name: process.env.DB_NAME,
        port: process.env.DB_PORT,
    },
    salt: process.env.SALT,
    mail: {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
}