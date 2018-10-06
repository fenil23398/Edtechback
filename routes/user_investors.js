var express = require('express');
var router = express.Router();
var ui = require('../model/user_joins');

router.get('/:id?', function(req, res, next) {

    if (req.params.id) {
        ui.getuserInvestorsbyId(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    } else {
        ui.getuserInvestors(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});


module.exports = router;