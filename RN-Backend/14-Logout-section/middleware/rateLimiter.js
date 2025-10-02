const redisClient = require("../config/redis");

const rateLimiter = async (req, res, next) => {
    try {
        const ip = req.ip;
        console.log(ip);
         
        //kya ip pehle se exist krta hai
        //set method redisClient.set(ip,`${Date.now()}`);
        //await redisClient.expire(ip,3600); //3600 seconds = 1 hour
    

        // Increment request count for this IP
        const requestCount = await redisClient.incr(ip);

        // Set expiration for the key if it's the first request
        if (requestCount === 1) {
            await redisClient.expire(ip, 3600); // 3600 seconds = 1 hour
        }

        if (requestCount >60) {
            throw new Error("Too many requests - try again later");
        }
         console.log(requestCount);
        next();

    } catch (error) {
        res.status(429).send("Error: " + error.message); // 429 = Too Many Requests
    }
}

module.exports = rateLimiter;
