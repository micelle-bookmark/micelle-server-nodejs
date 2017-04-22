
var express = require('express');


var router = new express.Router();

function home(req, res) {
    res.end('user/home');
};


router.get('/', home);


module.exports = router;
