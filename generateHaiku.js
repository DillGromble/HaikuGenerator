function createHaiku (cadence, wordList) {

  var haiku = cadence.map( function (lines) {
    return lines.map( function (syllables) {
      var availableWords = wordList[syllables].length;
      return wordList[syllables][Math.floor(Math.random() * availableWords)];
    }).join(' ');
  }).join('\n');

  return haiku;
}


module.exports = createHaiku;
