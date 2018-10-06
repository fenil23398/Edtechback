var db = require('../connection');
var companies = {

    getAllCompanies: function(callback) {
        return db.query("select * from companies", callback);
    },
    getCompaniesById: function(id, callback) {
        return db.query("select * from companies where fk_user_id=?", [id], callback);
    },
    addcompany: function(cc, callback) {
        return db.query("insert into companies values(?,?,?,?,?)", [cc.fk_user_id, cc.amount, cc.day, cc.month, cc.year], callback);
    }

}
module.exports = companies;