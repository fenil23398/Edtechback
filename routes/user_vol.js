var express = require('express');
var router = express.Router();
var uv = require('../model/user_joins');

router.get('/:id?', function(req, res, next) {

    if (req.params.id) {
        uv.getuserVolunteersbyId(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    } else {
        uv.getuserVolunteers(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});


module.exports = router;