var fotune = ('require./lib/fortune.js');
var express = require('express');
var app = express();

// set up handlebars view engine
var handlebars = require('express-handlebars').create({
 defaultLayout:'main',
 helpers: {
   static: function(name) {
     return require('./lib/static.js').map(name);
   }
 }
});                                               //set default layout for all pages

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

require('./routes.js')(app);

var autoViews = {};
var fs = require('fs');
app.use(function(req,res,next){
  var path = req.path.toLowerCase();
  // check cache; if it's there, render the view
  if(autoViews[path]) return res.render(autoViews[path]);
  // if it's not in the cache, see if there's
  // a .handlebars file that matches
  if(fs.existsSync(__dirname + '/views' + path + '.handlebars')){
    autoViews[path] = path.replace(/^\//, '');
    return res.render(autoViews[path]);
  }
  // no view found; pass on to 404 handler
  next();
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
 res.status(404);
 res.render('404');
});
// 500 error handler (middleware)
app.use(function(err, req, res, next){
 console.error(err.stack);
 res.status(500);
 res.render('500');
});

app.listen(app.get('port'), function(){
 console.log( 'Express started on http://localhost:' +
 app.get('port') + '; press Ctrl-C to terminate.' );
});
