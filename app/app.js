var express = require('express');
var PlayerStats = require('./models/player-stats');
var app = express();

// Port
var port = process.env.PORT || 3000;

// Router
var router = express.Router();

router.use(function (req, res, next) {
    console.log('something is happening!');
    next();
});


router.get("/", function (req, res) {
    res.json({message: "Hello! Welcome to the best API ever!"});
});

router.route('/playerstats?')
    .get(function (req, res) {
        var playerName = req.query.name;
        var year= req.query.year;
        var gotPlayer = false;
        var gotYear = false;

        if (playerName) gotPlayer = true;
        else {
            console.log("Error, should have got player");
        }
        if(year) gotYear=true;
        if(gotPlayer && !gotYear) {
            PlayerStats.find({$text: {$search: playerName}},
                function (err, players) {
                    if (err) {
                        console.log("Error");
                        return console.error(err);
                    }
                    console.log(players.name);
                    res.json(players);
                });
        }
        else if (gotPlayer && gotYear) {
             PlayerStats.find({$and: [{$text: {$search: playerName}}, {season :year}]},
                function (err, players) {
                    if (err) {
                        console.log("Error");
                        return console.error(err);
                    }
                    console.log(players.name);
                    res.json(players);
                });
        }
    });

app.use('/api', router);

app.listen(port, function () {
    console.log(`magic happens on ${port}`);
});
