var express = require('express');
var  router = express.Router();

router.get('/', function (req, res, next)  {
    res.json({'message':'Hello World!'})
});

router.get('/porcupine',function (req, res, next) {
    res.json({'message':'squeak'})
})

module.exports = router;