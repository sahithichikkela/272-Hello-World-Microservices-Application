const express = require('express');
const app = express();

app.get('/world', (request, response) => {
response.send('World');
})

const PORT = process.env.POST || 3001;
app.listen(PORT, () => {
console.log(`World service is running on port ${PORT}`);
});
