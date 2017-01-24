var express = require('express')
var app = express()

app.use(express.static(__dirname + '/View'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/Script'));
//Store all JS and CSS in Scripts folder.
app.use(express.static(__dirname + '/img'));
//Store all imgs and Video on imgs Folder
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('./index.html')
  console.log('A visitor WOAH on index');
})

app.get('/OWSTATSLooker.html', function (req, res) {
  res.render('./OWSTATSLooker.html')
  console.log('He made it this far, owstatslooker.')
})

  // Handle 404
  app.use(function(req, res) {
     res.send('404: Page not Found', 404);
     console.log('Just got 404 man')
  });
  
  // Handle 500
  app.use(function(error, req, res, next) {
     res.send('500: Internal Server Error', 500);
     console.log('500, somethings not right')
  });


app.listen(3000, function () {
  console.log('The website is listening on port 3000')
})