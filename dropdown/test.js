
var express = require('express');
const mysql = require('mysql')
const syncSQL = require('sync-sql');

var app = express();
app.set("view engine", "ejs");

const config = {
   host: 'db4free.net',
   user: 'ankitdemo',
   password: 'ankitdemo',
   database: 'ankitdemo'
}

qry = "SELECT name FROM users";
res = syncSQL.mysql(config, qry)
names = res.data.rows

qry = "SELECT id FROM users";
res = syncSQL.mysql(config, qry)
ids = res.data.rows

qry = "SELECT email FROM users";
res = syncSQL.mysql(config, qry)
emails = res.data.rows

app.get('/', function (req, res) {

   ui_data = {"name" : names, "ids": ids, "emails": emails}
   res.render("index", {data: ui_data});
});



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})