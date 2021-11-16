const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true,'Product Name must be provided']
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    rating:{
        type: Number,
        default: 4.5
    },
    featured:{
        type: Boolean,
        default: false
    },
    company:{
        type: String,
        enum:{
            values: ['ikea','liddy','caressa','marcos'],
            message:['{VALUE} is not spported']
        }
    },
    price: {
        type: Number,
        required: [true, 'Product Price must be provided']
    }
});

module.exports = mongoose.model('Product',productSchema);