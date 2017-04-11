var formattedDict = require('./parseDict.js');
var haikuGenerator = require('./generateHaiku.js');


console.log(haikuGenerator([[2, 1, 2], [3, 3], [3, 1, 1]], formattedDict));
