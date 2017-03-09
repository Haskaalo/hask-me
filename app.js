var express = require('express');
var app = express()
var path = require('path');
var http = require('http');
var server = http.createServer(app);
var compression = require('compression');
const fs = require('fs');
var randomstring = require('randomstring');
var dustDB = require('dustdb');
var randomnum = randomstring.generate({
  length: 7,
  charset: 'alphanumeric'
});

if (!fs.existsSync('./tmp')){
  fs.mkdirSync('./tmp');
  fs.mkdirSync('./tmp/linkshort');
}

app.use(compression())
// Store all .html in views folder + static
app.use(express.static(path.join(__dirname, 'views'),{extensions:['html']}));

app.use(express.static(__dirname + '/scripts'));
//Store all JS and CSS in Scripts folder.
app.use(express.static(__dirname + '/imgs'));
// link Store
app.use(express.static(path.join(__dirname, '/tmp/linkshort'),{extensions:['html']}));

//Store all imgs and Video on imgs Folder
app.set('view engine', 'html');
app.use(express.static(__dirname + '/intriguant'));

app.use(express.static(path.join(__dirname, './intriguant/views'),{extensions:['html']}));

app.get('/intriguant', function (req, res) {
  res.render('./intriguant.html')
})

app.get('/', function (req, res) {
  res.render('./index.html');
})

// LINK SHORT start
function makenew() {
  return randomnum = randomstring.generate({
  length: 7,
  charset: 'alphanumeric'
});
}
app.get('/linkshortapi?:id', function (req, res, next) {

var decode = decodeURI(req.query.id);
dustDB.createfile('./tmp/linkshort/', randomnum, decode);


res.send('hask.me/l/' + randomnum);
makenew();
})

app.get('/l/:link', function (req, res, next) {
  fs.readFile('./tmp/linkshort/' + req.params.link, (err, data) => {
    if (err) {
      res.status(404).send('404: Page Not Found')
    }
    else {
      res.redirect(301, data);
    }
  });
})
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
