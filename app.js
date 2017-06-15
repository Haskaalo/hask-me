var express = require('express');
var app = express()
var path = require('path');
var http = require('http');
var server = http.createServer(app);
var compression = require('compression');
const fs = require('fs');


// Store all .html in views folder + static
app.use(express.static(path.join(__dirname, 'views'),{extensions:['html']}));

app.use(express.static(__dirname + '/scripts'));
//Store all JS and CSS in Scripts folder.
app.use(express.static(__dirname + '/imgs'));

//Store all imgs and Video on imgs Folder
app.set('view engine', 'html');
app.use(express.static(__dirname + '/intriguant'));

app.use(express.static(path.join(__dirname, './intriguant/views'),{extensions:['html']}));

// middlewares
app.use(compression())

// LINK SHORT END

  // Handle 404
  app.use(function(req, res) {
    res.status(404).send('404: Page Not Found')
  });

  // Handle 500
  app.use(function(error, req, res, next) {
    res.status(500).send('500: Internal Server Error')
     console.log('500: SOMETHINGS NOT RIGHT!');
  });



  app.listen(1337, function() {
      console.log('Our app is running on http://localhost:' + 1337);
  });
