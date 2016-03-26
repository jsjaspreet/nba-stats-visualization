var mongoose = require('mongoose');
mongoose.connect('mongodb://198.199.98.80:27017/nba');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("CONNECTED!");
      // we're connected!
    //
});
