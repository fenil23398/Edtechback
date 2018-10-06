var express = require('express');
var router = express.Router();
var uc = require('../model/user_joins');

router.get('/:id?', function(req, res, next) {

    if (req.params.id) {
        uc.getuserCompaniesbyId(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    } else {
        uc.getuserCompanies(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});


module.exports = router;