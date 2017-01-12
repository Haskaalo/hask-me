// NOT COMPLETED (pls fix it)
 var request = require('request');
function search() {
  document.getElementById("loading").innerHTML = "Searching..."
var battletag = document.getElementById("search").value;
 var replace = battletag.replace('#', '-')
request('https://owapi.net/api/v2/u/' + replace + '/stats/competitive', function(error, response, body) { // Sorry OWAPI :3, ill do my own server one day :3
    if (!error && response.statusCode == 200) {
var data = JSON.parse(body);
        var user = "Looked for: " + battletag
        var levelreall = data.overall_stats.prestige * 100 + data.overall_stats.level
		var userlevel = "Level: " + levelreall
        var comprank = "Current Season Rank: " + data.overall_stats.comprank + " SR"
        var total_game = "Total of game(s) played: " + data.overall_stats.games
        var games_won = "Game(s) won: " + data.overall_stats.wins
        var games_lost = "Game(s) lost: " + data.overall_stats.losses
        var winrate = "Winrate: " + data.overall_stats.win_rate + "%"
        document.getElementById("loading").innerHTML = ""
        document.getElementById("not_found").innerHTML = "";
		document.getElementById("battletag").innerHTML = user;
		document.getElementById("level").innerHTML = userlevel;
		document.getElementById("comprank").innerHTML = comprank;
		document.getElementById("totalgame").innerHTML = total_game;
		document.getElementById("gamewon").innerHTML = games_won;
		document.getElementById("gamelost").innerHTML = games_lost;
		document.getElementById("winrate").innerHTML = winrate;


        console.log("Looked for: " + battletag);
    }
    else request('error', function(err) {
        document.getElementById("loading").innerHTML = ""
      console.log(err)
      document.getElementById("not_found").innerHTML = "Did not found " + battletag + " , check spelling to make sure no mistake has been made";
    })
});
}
window.search = search;