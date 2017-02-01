var express = require('express')
var app = express()
var path = require('path');
var http = require('http');
var server = http.createServer(app);


// Store all .html in views folder + static
app.use(express.static(path.join(__dirname, 'views'),{extensions:['html']}));

app.use(express.static(__dirname + '/scripts'));
//Store all JS and CSS in Scripts folder.
app.use(express.static(__dirname + '/imgs'));

//Store all imgs and Video on imgs Folder
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('./index.html');
})

app.get('/OWSTATSLooker', function (req, res) {
  res.render('./OWSTATSLooker.html');
})
app.get('/sitemap.xml', function (req, res) {
  res.render('./indexstuff/sitemap.xml');
})

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


  server.listen(3000, 'localhost');
  server.on('listening', function() {
      console.log('Express server started on port %s at %s', server.address().port, server.address().address);
  });
