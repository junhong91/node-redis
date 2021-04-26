const config = require('../../../config');
const redis = require('redis');
const { promisifyAll } = require('bluebird');
promisifyAll(redis);

const redisClient = redis.createClient({
    host: config.redis.HOST || '127.0.0.1',
    port: config.redis.PORT || 6379
});

module.exports = redisClient;