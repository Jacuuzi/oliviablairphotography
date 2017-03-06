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
      {src:"/img/item04.JPG"},
      {src:"/img/item02.JPG"},
      {src:"/img/item03.JPG"},
      {src:"/img/item01.JPG"},
      {src:"/img/item07.JPG"},
      {src:"/img/item08.JPG"},
      {src:"/img/item06.JPG"},
      {src:"/img/item05.JPG"},
      {src:"/img/item25.JPG"},
      {src:"/img/item26.JPG"},
      {src:"/img/item27.JPG"},
      {src:"/img/item28.JPG"},
      {src:"/img/item29.JPG"},
      {src:"/img/item30.JPG"},
      {src:"/img/item31.JPG"},
      {src:"/img/item32.JPG"},
      {src:"/img/item33.JPG"},
      {src:"/img/item34.JPG"}
    ]
  });
};
exports.events = function(req, res){
  res.render('categories', {
    category: 'events',
    photo: [
      {src:"/img/item09.JPG"},
      {src:"/img/item10.JPG"},
      {src:"/img/item11.JPG"},
      {src:"/img/item12.JPG"},
      {src:"/img/item13.JPG"},
      {src:"/img/item14.JPG"},
      {src:"/img/item15.JPG"},
      {src:"/img/item16.JPG"},
      {src:"/img/item17.JPG"}
    ]
  });
};
exports.family = function(req, res){
  res.render('categories', {
    category: 'family',
    photo: [
      {src:"/img/item18.JPG"},
      {src:"/img/item19.JPG"},
      {src:"/img/item20.JPG"},
      {src:"/img/item21.JPG"},
      {src:"/img/item22.JPG"},
      {src:"/img/item23.JPG"},
      {src:"/img/item24.JPG"}
    ]
  });
};
exports.landscape = function(req, res){
  res.render('categories', {
    category: 'landscape',
    photo: [
      {src:"/img/item36.JPG"},
      {src:"/img/item37.JPG"},
      {src:"/img/item38.JPG"},
      {src:"/img/item39.JPG"},
      {src:"/img/item40.JPG"},
      {src:"/img/item35.JPG"}
    ]
  });
};
