var fortune = require('../lib/fortune.js');
exports.home = function(req, res){
 res.render('home', {
   fortune: fortune.getFortune()
 });
};
exports.about = function(req, res){
 res.render('about', {
   fortune: fortune.getFortune()
 });
};
exports.contact = function(req, res){
  res.render('contact', {
    title: 'Olivia Photography - Contact',
    page: 'contact',
    fortune: fortune.getFortune()
  });
};
exports.portraits = function(req, res){
  res.render('categories', {
    category: 'portraits',
    photo: [
      {src:"./img/item04.jpg"},
      {src:"./img/item02.jpg"},
      {src:"./img/item03.jpg"},
      {src:"./img/item01.jpg"},
      {src:"./img/item07.jpg"},
      {src:"./img/item08.jpg"},
      {src:"./img/item06.jpg"},
      {src:"./img/item05.jpg"},
      {src:"./img/item25.jpg"},
      {src:"./img/item26.jpg"},
      {src:"./img/item27.jpg"},
      {src:"./img/item28.jpg"},
      {src:"./img/item29.jpg"},
      {src:"./img/item30.jpg"},
      {src:"./img/item31.jpg"},
      {src:"./img/item32.jpg"},
      {src:"./img/item33.jpg"},
      {src:"./img/item34.jpg"}
    ]
  });
};
exports.events = function(req, res){
  res.render('categories', {
    category: 'events',
    photo: [
      {src:"./img/item09.jpg"},
      {src:"./img/item10.jpg"},
      {src:"./img/item11.jpg"},
      {src:"./img/item12.jpg"},
      {src:"./img/item13.jpg"},
      {src:"./img/item14.jpg"},
      {src:"./img/item15.jpg"},
      {src:"./img/item16.jpg"},
      {src:"./img/item17.jpg"}
    ]
  });
};
exports.family = function(req, res){
  res.render('categories', {
    category: 'family',
    photo: [
      {src:"./img/item18.jpg"},
      {src:"./img/item19.jpg"},
      {src:"./img/item20.jpg"},
      {src:"./img/item21.jpg"},
      {src:"./img/item22.jpg"},
      {src:"./img/item23.jpg"},
      {src:"./img/item24.jpg"}
    ]
  });
};
exports.landscape = function(req, res){
  res.render('categories', {
    category: 'landscape',
    photo: [
      {src:"./img/item36.jpg"},
      {src:"./img/item37.jpg"},
      {src:"./img/item38.jpg"},
      {src:"./img/item39.jpg"},
      {src:"./img/item40.jpg"},
      {src:"./img/item35.jpg"}
    ]
  });
};
