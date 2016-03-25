var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('home', { title: 'weather' });
});*/

router.get('/', function(req, res, next) {
  res.render('monitor', { title: 'monitor' });
});

router.get('/realtime', function(req, res, next) {
  res.render('realtime', { title: 'air' });
});

module.exports = router;
