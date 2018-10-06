var db = require('../connection');
var investors = {

    getAllvolunteers: function(callback) {
        return db.query("select * from volunteers", callback);
    },
    getvolunteersById: function(id, callback) {
        return db.query("select * from volunteers where fk_user_id=?", [id], callback);
    },
    addVolunteer: function(vv, callback) {
        console.log(vv);
        return db.query("insert into volunteers values(?,?,?,?,?,?,?)", [vv.fk_user_id, vv.fk_lab_id, vv.pref_loc1, vv.pref_loc2, vv.pref_loc3, vv.skills, vv.qualifications], callback);
    }
}
module.exports = investors;