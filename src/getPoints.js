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

app.use(orm.express(`sqlite:///home/zl/sqlites/jfglxt.db`, {
    define: function (db, models, next) {
        models.User = db.define("user", {
            phoneNumber :String,
            user_name : String,
            password : String,
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
//获取phoneNumber取points
app.get("/user", function (req, res) {
    let values=req.query.phoneNumber;
    console.log(values);
    req.models.User.find({phoneNumber:values}, function (err, user) {
        if (err) throw err;
       // console.log(user);
        user.splice(0,1,user[0].points);
        console.log(user);
        res.send(user);//只传递了用户积分
    })
});
app.listen(8081, function () {
    console.log("App is listening on port 8081!");
});