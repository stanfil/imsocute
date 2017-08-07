function registerUser(req, res) {
    let user = {
        user_name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        points: 0,
        manager: 0
    };
    //res.send(user);
    //console.log(user.user_name);
    req.models.User.create(user ,function (err, result) {
        if (err) {
            res.status(400).send(`已有该用户，请用该手机号登录或用其他手机号注册`);
            return;
        }
        res.send(`用户${user.user_name}已被添加`);
    })
}

module.exports = {
    registerUser
};