const customErrorHandler  = (err,req,res,next) => {
    console.log(err);
    return res.status(500).send(err);
}

module.exports = customErrorHandler;