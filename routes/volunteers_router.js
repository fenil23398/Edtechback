var express = require('express');
var router = express.Router();
var volunteers = require('../model/tbl_volunteers');

router.get('/:id?', function(req, res, next) {
    if (req.params.id) {
        volunteers.getvolunteersById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    } else {
        volunteers.getAllvolunteers(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});


router.post('/', function(req, res, next) {
    volunteers.addVolunteer(req.body, function(err, count) {
        console.log(req.body);
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

module.exports = router;