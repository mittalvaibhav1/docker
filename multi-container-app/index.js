const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (error, visits) => {
        res.send("Number of Visits: ", visits);
        client.set('visits', parseInt(visits) + 1);
    });
});
