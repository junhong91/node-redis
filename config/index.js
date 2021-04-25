require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    redis: {
        REDIS_USER: process.env.REDIS_USER,
        REDIS_PW: process.env.REDIS_PW
    }
}