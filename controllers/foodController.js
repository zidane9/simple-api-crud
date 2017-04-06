'use strict'

let Food = require('../models/food');

let getAll = function (req, res, next) {
  Food.find(function (err, foods){
    if(err){
      res.json({error: err});
    } else {
      res.json(foods);
    }
  })
};

let getOne = function(req,res,next){
  Food.findOne({_id: req.params.id}, function (err, food) {
    if (err) return handleError(err);
    res.send(food);
  })
};

let createOne = function (req, res, next) {
  Food.create({
    name : req.body.name,
    price : req.body.price,
    expired_date : new Date(req.body.expired_date)
  }, function (error, food){
    if(error) throw error;
    res.send(food);
  })
};

let update = function (req, res, next) {
  let temp = {
    name : req.body.name,
    price : req.body.price,
    expired_date : new Date(req.body.expired_date)
  }
  Food.update({ _id: req.params.id }, { $set: temp}, function(err){
    res.send(err);
  });
};

let deleteOne = function (req, res, next) {
  Food.findOne({_id: req.params.id}).remove(function(err){
    res.send(err);
  });
};

module.exports = {
  getAll,
  getOne,
  createOne,
  update,
  deleteOne
}
