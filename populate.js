require('dotenv').config();
const productModel = require('./models/products');
const connectDB = require('./db/connnect');
const productsJSON = require('./products.json');

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI);
        await productModel.deleteMany();
        await productModel.create(productsJSON);
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start()