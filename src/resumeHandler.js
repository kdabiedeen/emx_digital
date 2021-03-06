var puzzleHandler = require('./puzzleHandler')

var resumeHandler = function(urlParams){
  var response;
  var q = urlParams.q

  switch(q){
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
      response = "https://github.com/kdabiedeen/emx_digital/archive/master.zip"
      break;
    case "Referrer":
      response = "Jenny Gasparis (LinkedIn) "
      break;
    case "Puzzle":
      var puzzle = urlParams.d
      response = puzzleHandler(puzzle);
      break;
  }

  return response;
}

module.exports = resumeHandler;
