var db = require('../connection');
var investors = {

    getAllInvestors: function(callback) {
        return db.query("select * from investors", callback);
    },
    getInvestorsById: function(id, callback) {
        return db.query("select * from investors where fk_user_id=?", [id], callback);
    },
    addInvestor: function(inv, callback) {
        return db.query("insert into investors values(?,?,?,?,?,?,?,?)", [inv.fk_user_id, inv.amount, inv.start_date, inv.expected_ret_date, inv.actual_ret_date, inv.pref_loc1, inv.pref_loc2, inv.pred_loc3], callback);
    }

}
module.exports = investors;