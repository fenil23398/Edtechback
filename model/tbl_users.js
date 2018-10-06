var db = require('../connection');
var Users = {
    getAllUsers: function(callback) {
        return db.query("select * from users", callback);
    },
    getUsersById: function(id, callback) {
        return db.query("select * from users where user_id=?", [id], callback);
    },
    insertUser: function(usr, callback) {
        return db.query("insert into users values(?,?,?,?,?,?)", [null, usr.email_id, usr.password, usr.name, usr.contact_no, usr.user_type], callback);
    }
}
module.exports = Users;