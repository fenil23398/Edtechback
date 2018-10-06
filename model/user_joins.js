var db = require('../connection');
var userjoins = {

    getuserCompanies: function(callback) {
        return db.query("select u.*,c.* from users u,companies c where u.user_id=c.fk_user_id", callback);
    },
    getuserCompaniesbyId: function(id, callback) {
        return db.query("select u.*,c.* from users u,companies c where u.user_id=c.fk_user_id and c.fk_user_id=?", [id], callback);
    },
    getuserInvestors: function(callback) {
        return db.query("select u.*,i.* from users u,investors i where u.user_id=i.fk_user_id", callback);
    },
    getuserInvestorsbyId: function(id, callback) {
        return db.query("select u.*,i.* from users u,investors i where u.user_id=i.fk_user_id and i.fk_user_id=?", [id], callback);
    },
    getuserVolunteers: function(callback) {
        return db.query("select u.*,v.* from users u,volunteers v where u.user_id=v.fk_user_id", callback);
    },
    getuserVolunteersbyId: function(id, callback) {
        return db.query("select u.*,v.* from users u,volunteers v where u.user_id=v.fk_user_id and v.fk_user_id=?", [id], callback);
    },


}
module.exports = userjoins;