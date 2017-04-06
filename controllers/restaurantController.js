'use strict'

let Restaurant = require('../models/restaurant');

let getAll = function (req, res, next) {
  Restaurant.find()
  .populate('menu')
  .exec(function (err, restaurants) {
    if(err){
      res.json({error: err});
    } else {
      res.json(restaurants);
    }
  })
};

let getOne = function(req,res,next){
  Restaurant.findOne({_id: req.params.id})
  .populate('menu')
  .exec(function (err, restaurant) {
    if(err){
      res.json({error: err});
    } else {
      res.json(restaurant);
    }
  })
};

let createOne = function (req, res, next) {
  Restaurant.create({
    name : req.body.name,
    owner : req.body.owner,
    address : req.body.address,
    open_status : req.body.open_status,
  }, function (error, food){
    if(error) throw error;
    res.send(food);
  })
};

let addMenu = function (req, res, next) {
  Restaurant.findOne({_id: req.params.id}, function (err, restaurant) {
    if (err) return handleError(err);

    let menuResto = restaurant.menu;
    menuResto.push(req.body.food);
    let temp = {
      menu : menuResto
    };
    Restaurant.update({ _id: req.params.id }, { $set: temp}, function(err, response){
      if(err) res.send(err);
      res.send(response);
    });
  })
};

let update = function (req, res, next) {
  let temp = {
    name : req.body.name,
    owner : req.body.owner,
    address : req.body.address,
    open_status : req.body.open_status,
  }
  Restaurant.update({ _id: req.params.id }, { $set: temp}, function(err, response){
    if(err) res.send(err);
    res.send(response);
  });
};

let deleteOne = function (req, res, next) {
  Restaurant.findOne({_id: req.params.id}).remove(function(err, response){
    if(err) res.send(err);
    res.send(response);
  });
};

module.exports = {
  getAll,
  getOne,
  createOne,
  addMenu,
  update,
  deleteOne
}
