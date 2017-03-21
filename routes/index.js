var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: '中南大学苹果实验室' });
});

router.get('/member', function(req, res) {
    res.render('html/member.html', { title: '中南大学苹果实验室' });
});

module.exports = router;
