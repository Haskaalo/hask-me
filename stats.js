// NOT COMPLETED (pls fix it)
 var request = require('request');
function search() {
var battletag = document.getElementById("search").value;
 var replace = battletag.replace('#', '-') // pls replace result.battletag with input from index.html(currently dont know how)
request('https://owapi.net/api/v2/u/' + replace + '/stats/competitive', function(error, response, body) { // Sorry OWAPI :3, ill do my own server one day :3
    if (!error && response.statusCode == 200) {
var data = JSON.parse(body);
        var userlevel = "Level: " + levelreall
        var user = "Looked for: " + battletag
        var levelreall = data.overall_stats.prestige * 100 + data.overall_stats.level
        var comprank = data.overall_stats.comprank + " SR"
        var total_game = "Total of game(s) played" + data.overall_stats.games + " SR"
        var games_won = "Game(s) won: " + data.overall_stats.wins
        var games_lost = "Game(s) lost" + data.overall_stats.losses
        var winrate = "Winrate: " + data.overall_stats.win_rate
		
		document.getElementById("battletag").innerHTML = user;
		document.getElementById("level").innerHTML = levelreall;
		document.getElementById("comprank").innerHTML = comprank;
		document.getElementById("totalgame").innerHTML = total_game;
		document.getElementById("gamewon").innerHTML = games_won;
		document.getElementById("gamelost").innerHTML = games_lost;
		document.getElementById("winrate").innerHTML = winrate;
		
		
        console.log("Looked for: " + battletag);
    }
    else if (!error && response.statusCode == 404) {
      window.location.replace("https://hask.me/notfound.html");
    }
});
}
window.search = search;