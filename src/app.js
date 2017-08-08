'use strict';
let express = require('express');
let orm = require('orm');
let app = express();
let bodyPaser = require('body-parser');
let path = require('path');
let urlencodedParser = bodyPaser.urlencoded({extended: true});
let appRoot = path.join(__dirname, '/');
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(orm.express(`sqlite://${appRoot}jfglxt.db`, {
    define: function (db, models, next) {
        models.User = db.define("user", {
            user_name : String,
            phoneNumber : String,
            /*password : String,*/
            points : Number,
            manager : Number
        });
        models.Log = db.define('logs', {
            id : Number,
            operation : Number,
            date : String,
            user_pn : String,
            manager_pn : String
        });
        next();
    }
}));
<<<<<<< HEAD
=======

app.get('/users/all',function (req,res) {
    let allUserInfo = require('./allUsersInfo');
    allUserInfo.findAllUserInfo(req,res);
});

>>>>>>> 68ed2ac1dad83338fdae5db6b703772341c49e37
app.listen(8081, function () {
    console.log("App is listening on port 8081!");
});
