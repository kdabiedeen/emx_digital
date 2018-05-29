/*
  Solving Puzzle Algorithm:
  input: ABCD A->-- B-=-- C-<-- D>---
  1) Identify line with equal sign (B)
  2) Fill in 3 remaining spaces of (step 1) with the opposite given symbol of every other line
     given characters: A: > , C: < , D: >
     flip each and add it to (step 1) in order
     resulting in: B<=><
  3) using step 2, we can calculate ever other line
     we are given the position of the "=" for each line(index 0, index 1, index 2, index 3) by line
     so we know A is = _ _ _
                B is < = > <
                C is _ _ = _
                D is _ _ _ =

    to get A , we take line B and swap the equal sign with the index of ("=") in line A and flip the arrow
    resulting in: A = > _ _ & then add the remaining characters of line B
    repeat for each line

  4) the input gives us one character, iterate through all the results and replace any calculated symbols with the givens
    example of a given is : _ > _ _ (index 1 '>'' is a given)
  */

var puzzleHandler = function(input){
  input = input.substring(input.indexOf('ABCD') + 5, input.length);
  var rows = input.split(/\r?\n/).slice(0,4);

  //trim each line to avoid any trailing white space issues
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

    //place given "=" symbols in correct position
    answer[i][i] = "=";

    //collect given symbols to build the first line with ='s symbol
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

  //swap with = and flip arrow, leave other two symbols unchanged for each line
  var result = " ABCD\n"
  for(var i = 0; i < answer.length; i++){
    if(i != indexOfEquals){
      var dummyRow = givenRow.slice(0);
      var swapChar = opposites[dummyRow[i]];
      dummyRow[i] = "="
      dummyRow[indexOfEquals] = swapChar;

      //change any calculated symbols with givens
      dummyRow[collectGivenChars[i].i] = collectGivenChars[i].c
      answer[i] = dummyRow;
    }
    result += rows[i][0] + (answer[i].join("")) + "\n";
  }

  return result;
}

module.exports = puzzleHandler;
