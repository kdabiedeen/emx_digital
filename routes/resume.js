var express = require('express');
var resumeHandler = require('./../src/resumeHandler')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  try {
    var urlParam = req.query.q;
    var result = resumeHandler(urlParam);
    res.send(result)
  } catch(error){
    res.send(error.stack());
  }
});

module.exports = router;
