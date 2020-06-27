const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema;

const AuthSchema = new Schema({
    title: String,
    language: String,
    nation: String,
    image: String,
    details: String,
});

var Authdata = mongoose.model('authdata',AuthSchema);

module.exports = Authdata;