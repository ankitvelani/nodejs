var fs = require('fs');
var express = require('express');
var app = express();

const Connection = require('./connection');
const sql = new Connection({});

flag=false;
if(flag){
    var data = fs.readFileSync('input.sql');
    sql.create(data.toString());
}

// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

app.get('/users', function (req, res) {
    sql.select(res, "users")
});


// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});