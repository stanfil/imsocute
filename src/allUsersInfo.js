/**
 * Created by zh on 17-8-8.
 */
'use strict';
function findAllUserInfo(req,res) {
    let result=[];
    req.models.User.find(function (err,userInfo) {
        userInfo.forEach(function (element) {
            let user = {};
            user.user_name = element.user_name;
            user.phoneNumber = element.phoneNumber;
            user.points = element.points;
            user.manager = element.manager;
            result.push(user);
        })
        res.send(result);
    })
}

module.exports = {
    findAllUserInfo
};