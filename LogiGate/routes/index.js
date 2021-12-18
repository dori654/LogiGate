var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Login', function (req, res) {
  res.render('login', {
    title: 'Login page'
  });
})

router.get('/Register', function (req, res) {
  res.render('register');
})

router.get('/Game', function (req, res) {
  res.render('game');
})

router.get('/Dashboard', function (req, res) {
  res.render('../Dashboards/carousel');
})

module.exports = router;
