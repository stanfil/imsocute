/**
 * Created by zh on 17-8-8.
 */
'use strict';
function findAllUserInfo(req,res) {
    req.models.User.find(function (err,userInfo) {
        res.send(userInfo);
    })
}

module.exports = {
    findAllUserInfo
};