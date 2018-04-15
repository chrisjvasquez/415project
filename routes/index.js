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
