const express = require('express');
const app = express();
const router = require('./router/auh-router');
const connectDB = require('./utils/db');

app.use(express.json());

app.use('/auth', router);

connectDB().then(()=>{
app.listen(8080, ()=>{
    console.log("server is listening...");
});
});