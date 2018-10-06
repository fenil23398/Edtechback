var express = require('express');
var router = express.Router();
var companies = require('../model/tbl_companies');

router.get('/:id?', function(req, res, next) {

    if (req.params.id) {
        companies.getCompaniesById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    } else {
        companies.getAllCompanies(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.post('/', function(req, res, next) {
    companies.addcompany(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

module.exports = router;