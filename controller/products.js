const asyncWrapper = require('../middleware/asyncWrapper');
const productModel = require('../models/products');

const getProducts = asyncWrapper(async(req,res,next) => {
    const searchQuery = {};
    const {company,featured,name} = req.query;
    if(featured){
        searchQuery.featured = featured === 'true' ? true:false;
    }
    if(company){
        searchQuery.company = company;
    }
    if(name){
        searchQuery.name = {$regex:name, $options:'i'};
    }
    const products = await productModel.find(searchQuery);
    res.status(200).json({nbhits:products.length,products});
});

const getProductsStatic = asyncWrapper(async(req,res,next) => {
    res.status(200).json({message:'All Products Static'});
});

module.exports = {
    getProducts,
    getProductsStatic
}