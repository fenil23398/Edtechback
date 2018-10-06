var db = require('../connection');
var logins = {

    getUserByLogin: function(usr, callback) {
        console.log('heelo');
        return db.query("select * from users where email_id=? and password=?", [usr.email_id, usr.password], callback);

    }


}
module.exports = logins;