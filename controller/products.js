const asyncWrapper = require('../middleware/asyncWrapper');

const getProducts = asyncWrapper(async(req,res,next) => {
    res.status(200).json({mesage:'All Products'});
});

const getProductsStatic = asyncWrapper(async(req,res,next) => {
    res.status(200).json({message:'All Products Static'});
});

module.exports = {
    getProducts,
    getProductsStatic
}