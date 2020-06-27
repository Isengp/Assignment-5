const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema;

const RegSchema = new Schema({
    name: String,
    email: String,
    password: String,
    city: String,
    state: String,
});

var Regdata = mongoose.model('regdata',RegSchema);

module.exports = Regdata;