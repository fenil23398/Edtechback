var express = require('express');
var router = express.Router();
var login = require('../model/tbl_login');

router.post('/', function(req, res, next) {
    login.getUserByLogin(req.body, function(err, count) {
        console.log(req.body);
        if (err) {
            res.json(err);
        } else {
            if (count == "[]") {

            } else {
                res.json(count);
            }
        }
    });
});
module.exports = router;