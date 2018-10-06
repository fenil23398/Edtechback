var db = require('../connection');
var images = {

    getAllImages: function(callback) {
        return db.query("select * from images", callback);
    },
    getImagesById: function(id, callback) {
        return db.query("select * from images where img_id=?", [id], callback);
    }

}
module.exports = images;