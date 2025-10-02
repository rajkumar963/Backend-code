const redisClient = require("../config/redis");

const Window_size=3600;
const Max_requests=60;
const rateLimiter = async (req, res, next) => {
    try {
        const key=`IP:${req.ip}`; // unique key for each IP address
        const currentTime=Math.floor(Date.now()/1000); // current time in seconds
        const windowStart=currentTime-Window_size;

        await redisClient.zRemRangeByScore(key, 0, windowStart);
        const requestCount=await redisClient.zCard(key);

        //total no values kitni hai
        if(requestCount>=Max_requests){
            throw new Error("Error: Too many requests - try again later"); // 429 = Too Many Requests
        }

        await redisClient.zAdd(key, [{score: currentTime, value:`${currentTime}:${Math.random()}`}]);  //cryptic also used here

        await redisClient.expire(key, Window_size);

        next();


    } catch (error) {
        res.status(429).send("Error: " + error.message); // 429 = Too Many Requests
    }
}

module.exports = rateLimiter;
