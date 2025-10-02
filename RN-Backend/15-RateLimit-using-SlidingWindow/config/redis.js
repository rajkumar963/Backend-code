const redis = require('redis');

const redisClient = redis.createClient({
  username: 'default',
    password: 'iK1qfXnEJL5ateyumhmLwtqTvrCsxRFP',
    socket: {
        host: 'redis-16940.c322.us-east-1-2.ec2.redns.redis-cloud.com',
        port: 16940
    }
});


module.exports = redisClient;