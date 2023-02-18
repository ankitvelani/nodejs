var mysql = require('mysql');

class Connection {
    
    host= 'db4free.net';
    user = 'ankitdemo';
    password = 'ankitdemo';
    database = 'ankitdemo';
    conn = "";
    constructor() {
        this.conn = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database,
            multipleStatements: true
        });
        this.conn.connect();
    }

    select(res, table, cols= " * ", where=" 1=1 "){
        var sql = "SELECT "+cols+" FROM "+table+" WHERE "+where;

        this.conn.query(sql, function (err, result, fields) {
            res.send(result);
            //res.send({ error: false, data: result, message: table+' Table data.' });
        });
    }

    create(sql){
        this.conn.query(sql, function (err, result) {
          console.log("All tables has been created");
        });
    }

}

module.exports = Connection;

