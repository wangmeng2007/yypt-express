const mongoose=require('mongoose')
var express = require('express');
var router = express.Router();
var db = mongoose.model("users");


/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('index.html');
});

module.exports = router;
