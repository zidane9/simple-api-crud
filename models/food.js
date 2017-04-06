'use strict'

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create a Schema
let foodSchema = new Schema({
  // isbn: {type: String, required: true, unique: true},
  name: String,
  price: Number,
  expired_date: Date
});

//the schema is useless so far
//we need to create a model using it
let Food = mongoose.model('Food', foodSchema);

//make this available to our users in our Node Applications
module.exports = Food;
