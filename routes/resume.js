var express = require('express');
var resumeHandler = require('./../src/resumeHandler')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  try {
    var urlParams = req.query;
    var result = resumeHandler(urlParams);
    res.send(result)
  } catch(error){
    res.send(error.stack());
  }
});

module.exports = router;
