var express = require('express');
var router = express.Router();
var users = require('../model/tbl_users');

router.get('/:id?', function(req, res, next) {

    if (req.params.id) {
        users.getUsersById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    } else {
        users.getAllUsers(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.post('/', function(req, res, next) {
    users.insertUser(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});


module.exports = router;