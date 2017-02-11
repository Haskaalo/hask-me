var express = require('express');
var app = express()
var path = require('path');
var http = require('http');
var server = http.createServer(app);
var compression = require('compression');
var fs = require('fs'); // fs for create-html
var createHTML = require('create-html');
var randomstring = require('randomstring');
var randomnum = randomstring.generate({
  length: 7,
  charset: 'alphanumeric'
});

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.use(compression())
// Store all .html in views folder + static
app.use(express.static(path.join(__dirname, 'views'),{extensions:['html']}));

app.use(express.static(__dirname + '/scripts'));
//Store all JS and CSS in Scripts folder.
app.use(express.static(__dirname + '/imgs'));
// link Store
app.use(express.static(path.join(__dirname, 'linkshort'),{extensions:['html']}));

//Store all imgs and Video on imgs Folder
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('./index.html');
})

app.get('/OWSTATSLooker', function (req, res) {
  res.render('./OWSTATSLooker.html');
})
// LINK SHORT start
function makenew() {
  return randomnum = randomstring.generate({
  length: 7,
  charset: 'alphanumeric'
});
}
app.get('/linkshortapi?:id', function (req, res, next) {

  // if the user ID is 0, skip to the next route req.params.id
  // ======================================================
// THIS IS CREATE HTML PART
// ======================================================
var html = createHTML({
  title: 'Redirecting...',
  head: '<meta http-equiv="refresh" content="0; url='+ req.query.id +'" />',
  body: '<h1><a href="'+ req.query.id +'">Redirect</a></h1>' // change this soon
})

      fs.writeFile('linkshort/' + randomnum + '.html', html, function (err) {
        console.log('now creating a new page ' + randomnum);
  if (err) console.log(err)
})
// ======================================================
// END
// ======================================================
res.send('hask.me/' + randomnum);
makenew();
})
// LINK SHORT END

  // Handle 404
  app.use(function(req, res) {
    res.send(404, '<meta http-equiv="refresh" content="0; url=./" /> <p><a href="./">404: Not found. Return home?</a></p>');
     console.log('just got 404!');
  });

  // Handle 500
  app.use(function(error, req, res, next) {
     res.send('<h1>500: Internal Server Error</h1>', 500);
     console.log('500: SOMETHINGS NOT RIGHT!');
  });



  app.listen(1337, function() {
      console.log('Our app is running on http://localhost:' + 1337);
  });
