// NOT COMPLETED (pls fix it)
function search() {
var request = require('request');
var battletag = document.getElementById("searchinput").value;
 var replace = battletag.replace('#', '-') // pls replace result.battletag with input from index.html(currently dont know how)
request('https://owapi.net/api/v2/u/' + replace + '/stats/competitive', function(error, response, body) { // might need to change with our own server
    if (!error && response.statusCode == 200) {
var data = JSON.parse(body);
        var levelreall = data.overall_stats.prestige * 100 + data.overall_stats.level
        /* explosion of variable incoming, idk why but I think it will be more easy to put it in the user.html
        dont forget "stats for" which is var replace and "level" with var levelreall*/

        var comprank = data.overall_stats.comprank + " SR"
        var total_game = "Total of game(s) played" + data.overall_stats.games + " SR"
        var games_won = "Game(s) won: " + data.overall_stats.wins
        var games_lost = "Game(s) lost" + data.overall_stats.losses
        var winrate = "Winrate: " + data.overall_stats.win_rate
        console.log("If you see this, it might have work...");
    }
    else if (!error && response.statusCode == 404) {
      window.location.assign('./notfound.html');
    }
});
}
