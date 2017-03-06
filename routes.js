var main = require('./handlers/main.js');
var aws = require('aws-sdk');

aws.config.loadFromPath('config.json');

var ses = new aws.SES({apiVersion: '2010-12-01'});

var to = ['thorntonjdt@gmail.com']
var from = 'thorntonjdt@gmail.com'

module.exports = function(app){

  app.get('/', main.home);
  app.get('/portraits', main.portraits);
  app.get('/events', main.events);
  app.get('/family', main.family);
  app.get('/landscape', main.landscape);
  app.get('/about', main.about);
  app.get('/contact', main.contact);
  app.get('/contact/send', function(req,res){
    ses.sendEmail( {
       Source: from,
       Destination: { ToAddresses: to },
       Message: {
           Subject: {
               Data: req.query.subject
           },
           Body: {
               Text: {
                   Data: req.query.text
            }
       }
    }},function(err, data) {
        if(err) throw err
            console.log('Email sent:');
            console.log(data);
          res.end('sent');
     });
  });
};
