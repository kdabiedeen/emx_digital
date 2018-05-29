var puzzleHandler = function(input){

  return "hello";
  input = input.substring(input.indexOf('ABCD') + 5, input.length);
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

module.exports = puzzleHandler;
