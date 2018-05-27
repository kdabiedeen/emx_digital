var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var url_param = req.query.q;
  var response;
  switch(url_param){
    case "Ping":
      response = "OK";
      break;
    case "Name":
      response = "Kevin Dabiedeen"
      break;
    case "Phone":
      response = "646-508-8131"
      break;
    case "Email Address":
      response = "kdabiedeen1@gmail.com"
      break;
    case "Degree":
      response = "B.S. Computer Science"
      break;
    case "Position":
      response = "Software Engineer"
      break;
    case "Years":
      response = "1 - 2 Years"
      break;
    case "Status":
      response = "Yes"
      break;
    case "Resume":
      response = "https://linkedin.com/in/kdabiedeen"
      break;
    case "Source":
      response = "https://github.com/kdabiedeen/emx_digital"
      break;
    case "Referrer":
      response = "Jenny"
      break;
    case "Puzzle":
      response = "Puzzle"
      break;
    res.send(response)
  }
});

module.exports = router;
