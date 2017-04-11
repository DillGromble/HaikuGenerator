var fs = require('fs');
var rawData = require('./parseDict.js');
var bookFilter = fs.readFileSync('./pg2264.txt').toString();


function processBook (book) {
  var lines = book.replace(/[\\\n\r]+/g, '')
                  .replace(/[,.;:!*)(]+/g, ' ')
                  .toLowerCase()
                  .split(' ');

  lines = new Set(lines);
  lines = Array.from(lines);

  return lines;
}


var processedText = processBook(bookFilter);

function humanize (bookText, dictionary) {

  for (var i = 0; i < dictionary.length; i++) {
    if (dictionary[i] !== undefined) {
      dictionary[i] = dictionary[i].filter(function (word) {
        return bookText.includes(word.toLowerCase());
      });
    }
  }

  return dictionary
}

module.exports = humanize(processedText, rawData);
