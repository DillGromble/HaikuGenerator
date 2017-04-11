var fs = require('fs');
var cmudictFile = readCmudictFile('./cmudict.txt');


function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}


function formatData(data){
   var lines = data.toString().split('\n'),
       lineSplit,
       word,
       syllables,
       wordArray = [];

   lines.forEach(function(line){
    lineSplit = line.split('  ');
    word = lineSplit[0];
    syllables = countSyllables(lineSplit[1]);

    if (wordArray[syllables]) {
      wordArray[syllables].push(word);
    }
    else {
      wordArray[syllables] = [word];
    }
  });

  return wordArray;
}


function countSyllables (phonemes) {
  var count = 0;

  if (typeof phonemes === 'undefined') return count
  else phonemes = phonemes.split(' ')

  phonemes.forEach(function (syllable) {
    if (syllable.match( /\d/)) count++;
  })

  return count;
}


module.exports = formatData(cmudictFile);
