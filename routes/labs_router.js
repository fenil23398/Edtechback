var express = require('express');
var router = express.Router();
var labs = require('../model/tbl_labs');

router.get('/:id?', function(req, res, next) {

    if (req.params.id) {
        labs.getLabsById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    } else {
        labs.getAlllabs(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.post('/', function(req, res, next) {
    labs.addLab(req.body, function(err, count) {
        console.log('hh');
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

module.exports = router;