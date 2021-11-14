const notFound = (req,res) =>{
    res.status(404).send('No Such Route Found');
}

module.exports = notFound;