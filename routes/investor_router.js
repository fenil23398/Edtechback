var express = require('express');
var router = express.Router();
var investor = require('../model/tbl_investors');

router.get('/:id?', function(req, res, next) {

    if (req.params.id) {
        investor.getInvestorsById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    } else {
        investor.getAllInvestors(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.post('/', function(req, res, next) {
    investor.addInvestor(req.body, function(err, count) {
        console.log('hh');
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

module.exports = router;