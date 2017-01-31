 var request = require('request');
function search() {
    document.getElementById("not_found").innerHTML = ""
  document.getElementById("loading").innerHTML = "Searching..."
var battletag = document.getElementById("search").value;
$( "#nombutton" ).replaceWith( "<button class='ui loading button' id='nombutton'>Search</button>" );
 var replace = battletag.replace('#', '-')
request('https://owapi.net/api/v3/u/' + replace + '/stats', function(error, response, body) { // Sorry OWAPI :3, ill do my own server one day :3
    if (!error && response.statusCode == 200) {

        $( "#nombutton" ).replaceWith( "<button class='ui button' id='nombutton' onclick='search()'>Search</button>" );
        var data = JSON.parse(body)
        var user = "Looked for: " + battletag
        var levelreall = data.us.stats.competitive.overall_stats.prestige * 100 + data.us.stats.competitive.overall_stats.level
		var userlevel = "Level: " + levelreall
        var comprank = "Current Season Rank: " + data.us.stats.competitive.overall_stats.comprank + " SR " + "["+ data.us.stats.competitive.overall_stats.tier + "] "
        var total_game = "Total of game(s) played: " + data.us.stats.competitive.overall_stats.games
        var games_won = "Game(s) won: " + data.us.stats.competitive.overall_stats.wins
        var games_lost = "Game(s) lost: " + data.us.stats.competitive.overall_stats.losses
        var winrate = "Winrate: " + data.us.stats.competitive.overall_stats.win_rate + "%"
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
      document.getElementById("not_found").innerHTML = "Did not found " + battletag + ", check spelling to make sure no mistake has been made";
      $( "#nombutton" ).replaceWith( "<button class='ui button' id='nombutton' onclick='search()'>Search</button>" );
    })
});
}
window.search = search;
