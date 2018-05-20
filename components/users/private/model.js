const mongoose = require('mongoose');
const keygen = require('keygenerator');
const Schema = mongoose.Schema;

//const products = require('./products');
//const shoplist = require('./shoplist');


function generateAPIKey() {
    return (keygen._({length: 2}) + '-' + keygen._({length: 6})
        + '-' + keygen.number()
        + '-' + keygen._({length: 6})
        + '-' + keygen._({length: 8})).replace(/&/g, '');
}

let userSchema = Schema({
    key: {
        type: String,
        default: generateAPIKey
    },
    username: {
        type: String,
        index: {unique: true}
    },
    age: {
        type: Number,
        default: null
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        lowercase: true
    },
    name: {
        type: String,
        default: null
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    products: [{
        type: Schema.ObjectId,
        index: true,
        ref: 'products',
        default: null
    }],
    shoplist: [{
        type: String,
        index: true,
        ref: 'shoplist',
        default: null
    }]
});

module.exports = mongoose.model('users', userSchema);
