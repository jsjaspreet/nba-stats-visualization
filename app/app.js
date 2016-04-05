var express = require('express');
var PlayerStats = require('./models/player-stats');
var app = express();

// Port
var port = process.env.PORT || 3000;

// Router
var router = express.Router();


var interestedStats = 'name date minutes ast stl blk tov pts plus_minus fg fga tp tpa ft fta';

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
        var year = req.query.year;

        if (!playerName) res.json({error: "param 'name' is required'"});

        var query = null;

        if (playerName && !year) {
            query = {$text: {$search: playerName}};
        }
        else if (playerName && year) {
            query = {$and: [{$text: {$search: playerName}}, {season: year}]};
        }
        else {
            res.json({error: "missing required params"});
        }

        PlayerStats.find(query, interestedStats,
            function (err, players) {
                if (err) {
                    console.log("Error");
                    return console.error(err);
                }
                console.log(players.name);
                res.json(players);
            });

    });

app.use('/api', router);

app.listen(port, function () {
    console.log(`magic happens on ${port}`);
});
