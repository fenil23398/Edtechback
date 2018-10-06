var express = require('express');
var router = express.Router();
var images = require('../model/tbl_images');

router.get('/:id?', function(req, res, next) {

    if (req.params.id) {
        images.getImagesById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    } else {
        images.getAllImages(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});


module.exports = router;