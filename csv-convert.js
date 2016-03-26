var Converter = require('csvtojson').Converter;
var converter = new Converter({constructResult: false});

var fs = require('fs');

var readStream = fs.createReadStream(__dirname+"/nba-stats.csv");
var writeStream = fs.createWriteStream(__dirname+"/nba-stats.json");

readStream.pipe(converter).pipe(writeStream);



