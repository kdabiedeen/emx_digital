var puzzleHandler = require('./puzzleHandler')

var resumeHandler = function(urlParam){
  var response;

  return urlParam;
  switch(urlParam){
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
      response = "https://drive.google.com/uc?export=download&id=0B9S6A62lL2pJVEp1ZEpnUkZ6TFozbl8ydFBBMktXVUJ0MVVr"
      break;
    case "Source":
      response = "https://github.com/kdabiedeen/emx_digital"
      break;
    case "Referrer":
      response = "Jenny Gasparis (LinkedIn) "
      break;
    case "Puzzle":
      var puzzle = req.query.d;
      //response = puzzleHandler(puzzle);
      response = "hi"
      break;
  }

  return response;
}

module.exports = resumeHandler;
