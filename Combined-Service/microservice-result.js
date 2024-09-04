const express = require('express');
const axios = require('axios');
const app = express();
const port = 3003;

app.get('/combined', async (request, result) => {
    try{
        const hello = await axios.get('http://hello-service:80/hello');
        const world = await axios.get('http://world-service:80/world');
        result.send(`${hello.data} ${world.data}`);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).send(`Error fetching data`);
    }
});

app.listen(port, () => {
    console.log(`microservice running on port ${port}`);
});