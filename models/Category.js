const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({
name: String,
required: true,
},{timestamps:true});

module.exports = mongoose.model('Category', CatSchema);