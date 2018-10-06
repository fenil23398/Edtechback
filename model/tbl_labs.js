var db = require('../connection');
var labs = {

    getAlllabs: function(callback) {
        return db.query("select * from labs", callback);
    },
    getLabsById: function(id, callback) {
        return db.query("select * from labs where lab_id=?", [id], callback);
    },
    addLab(lb, callback) {
        return db.query("insert into labs values(?,?,?,?,?,?)", [null, lb.location, lb.no_of_operators, lb.no_of_computers, lb.lab_amount, lb.fk_user_id], callback);
    }

}
module.exports = labs;