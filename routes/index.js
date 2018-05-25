var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jdev_25 BOT API' });
});

router.get('/')

module.exports = router;
