const express =require('express');
const app = express();
const redis = require('ioredis');

const ip_address = {};

app.use("/", (req, res, next) => {

    if(ip_address[req.ip] === undefined) {
        ip_address[req.ip] = {
            count: 0,
            time: new Date().getTime()
        }
        return res.status(200).json({message: "Welcome"});
    }
    else {
        if(new Date().getTime() - ip_address[req.ip].time > 60*1000) {
            ip_address[req.ip] = {
                count: 0,
                time: new Date().getTime()
            }
            return res.status(200).json({message: "Welcome"});
        }
        else {
            if(ip_address[req.ip].count >= 10) {
                const time = 60 - ((new Date().getTime() - ip_address[req.ip].time)/1000);
                return res.status(429).json({message: `Too many requests please try again in  ${time.toFixed(0)} seconds`});
            }
            else {
                ip_address[req.ip].count++;
                const {count} = ip_address[req.ip];
                return res.status(200).json({message: `You have made ${10-count} requests`});
            }
        }
    }
})


app.listen(8080, async (req, res) => {
    try {
        console.log("Listening on port 8080");
    } catch (error) {
        console.log(error);
    }
    }   
);