var express = require('express');
var router = express.Router();
var Country = require('../models/countries.js')
var Auth = require('../config/auth.js')

router.get('/', function(req, res, next) {
  Country.find({}, function(err, countries){
    res.status(err ? 400 : 200).send(err || countries)
  })
});

router.post('/addCountry', Auth, function(req, res){
  Country.create(req.body, function(err, country){
    res.status(err ? 400 : 200).send(err || country)
  })
})

module.exports = router
