const express = require('express');
const app = express();

app.get('/hello',(request,response)=>{
response.send('Hello');
});

const PORT = process.env.POST || 3000;
app.listen(PORT, ()=>{
console.log(`Hello service is running on port ${PORT}`);
})
