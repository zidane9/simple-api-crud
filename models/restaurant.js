'use strict'

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create a Schema
let restaurantSchema = new Schema({
  name: String,
  owner: String,
  address: String,
  open_status: Boolean
});

//the schema is useless so far
//we need to create a model using it
let Restaurant = mongoose.model('Restaurant', restaurantSchema);

//make this available to our users in our Node Applications
module.exports = Restaurant;
