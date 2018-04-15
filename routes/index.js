var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'EMR Home Page' });
});
/* GET all EMRs. */
router.get('/emr', function(req, res, next) {
    res.render('emr', { title: 'emr' });
});
module.exports = router;
**under views add a .jade file named emr.jade and paste
extends layout

block content
p All EMRs:
    script(type='text/javascript' src='../public/javascripts/emrdb.js').
x = emr
console.log(x)