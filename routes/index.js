var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var path = __dirname;
  path = path.replace('\\routes','');
  res.sendFile(path+'/views/index.html')

});

module.exports = router;
