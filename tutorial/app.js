var fs = require('fs');

fs.writeFileSync("dog.txt", "hello dog");
console.log(fs.readFileSync("dog.txt").toString());
