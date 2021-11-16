const asyncWrapper = require('../middleware/asyncWrapper');
const productModel = require('../models/products');

const getProducts = asyncWrapper(async(req,res,next) => {
    const searchQuery = {};
    const {company,featured,name,sort, fields,pageNumber,limitNumber} = req.query;
    if(featured){
        searchQuery.featured = featured === 'true' ? true:false;
    }
    if(company){
        searchQuery.company = company;
    }
    if(name){
        searchQuery.name = {$regex:name, $options:'i'};
    }
    let toSend = productModel.find(searchQuery);
    if(sort){
        let sorted = sort.split(',').join(' ');
        toSend = toSend.sort(sorted);
    }else{
        toSend = toSend.sort('createdAt');
    }
    if(fields){
        const fieldList = fields.split(',').join(' ');
        toSend = toSend.select(fieldList);
    }
    //for page and limits
    let page = Number(pageNumber) || 1;
    let limit = Number(limitNumber) || 10;
    let skip = (page-1)*limit;
    toSend = toSend.skip(skip).limit(limit);
    
    const products = await toSend;
    res.status(200).json({nbhits:products.length,products});
});

const getProductsStatic = asyncWrapper(async(req,res,next) => {
    res.status(200).json({message:'All Products Static'});
});

module.exports = {
    getProducts,
    getProductsStatic
}