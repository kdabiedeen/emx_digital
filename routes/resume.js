var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.query.q == "Ping")
    res.send("OK")
  else if(req.query.q == "Name")
    res.send("Kevin Dabiedeen")
  else
    res.send("Monster")
});

router.post('/', function(req, res, next){
  res.send("OK")
});

module.exports = router;
