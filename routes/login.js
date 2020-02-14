const mongoose=require('mongoose')
var express = require('express');
var router = express.Router();
var db = mongoose.model("users");

router.get('/', function (req, res) {
    res.render('login');
});
router.post('/', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    if (username == '' || password == '') {
        //resData.code = 1;
        //resData.message = '用户名或密码不能为空';
        //res.json(resData);
        //return;
        res.send('用户名或密码不能为空');
    }
    //查询数据库验证用户名和密码
    db.findOne({
        username: username,
        password: password
    }).then(function (userInfo) {
        if (!userInfo) {
            res.send('用户名或密码错误')
        }
        //验证通过则登录
        // resData.message = '登录成功';
        // resData.userInfo = {
        //     _id: userInfo._id,
        //     username: userInfo.username
        // };
        res.send('登录成功');
        res.render('home')
    })
})

module.exports = router;
