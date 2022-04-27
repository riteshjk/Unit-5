const express =require('express');
const app = express();
const redis = require('ioredis');



app.listen(8080, async (req, res) => {
    try {
        console.log("Listening on port 8080");
    } catch (error) {
        console.log(error);
    }
    }   
);