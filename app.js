require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connnect');
const notFound = require('./middleware/notFound');

const app = express();

const port = 5000;
app.get('/',(req,res)=>{
    res.status(200).send('<h1>Store API</h1><a href="/api/v1/products"> See Products </a>');
});
app.use(notFound);

const start = async() => {
    try{
        //db connection
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
        console.log(`Listening on port ${port}`);
        });
    }catch(error){
        console.log(error);
    }
}

start();
