var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var call_result = function(input){
    var rows = input.split(/\r?\n/).slice(0,4);
    for(var i = 0; i < rows; i++){
      rows[i] = rows[i].trim();
    }

    var indexOfEquals = -1;
    var A = ['-', '-', '-', '-'];
    var B = ['-', '-', '-', '-'];
    var C = ['-', '-', '-', '-'];
    var D = ['-', '-', '-', '-'];

    var answer = [A,B,C,D]
    var collectGivenChars = []
    for(var i = 0; i < rows.length; i++){
      var current_string = rows[i].substring(1, rows[i].length);

      answer[i][i] = "=";

      for(var j = 0; j < current_string.length; j++){
        if(current_string[j] != '-')
          collectGivenChars.push({
            c: current_string[j],
            i: j
          });
      }

      if(current_string.indexOf("=") > -1)
        indexOfEquals = i;
    }

    var opposites = {}
    opposites['<'] = '>'
    opposites['>'] = '<'
    opposites['='] = '='

    var givenRow = []
    for(var givenChars of collectGivenChars)
        givenRow.push(opposites[givenChars.c])

    answer[indexOfEquals] = givenRow;

    var result = " ABCD\n"
    for(var i = 0; i < answer.length; i++){
      if(i != indexOfEquals){
        var dummyRow = givenRow.slice(0);
        var swapChar = opposites[dummyRow[i]];
        dummyRow[i] = "="
        dummyRow[indexOfEquals] = swapChar;

        dummyRow[collectGivenChars[i].i] = collectGivenChars[i].c
        answer[i] = dummyRow;
      }
      result += rows[i][0] + (answer[i].join("")) + "\n";
    }

    return result;
  }

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
      var puzzle = req.query.d;
      puzzle = puzzle.substring(puzzle.indexOf('ABCD') + 5, puzzle.length);
      response = call_result(puzzle);
      break;
  }
  res.send(response)
});

module.exports = router;
