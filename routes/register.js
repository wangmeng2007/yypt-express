const mongoose=require('mongoose')
var express = require('express');
var router = express.Router();
var db = mongoose.model("users");

router.get('/', function (req, res) {
    res.render('register');
});

router.post('/', function (req, res, next) {
    // 拿到前台传过来的值
    console.log("Data from submit form");
    var username = req.body.username;
    var password = req.body.password;
    var repassword = req.body.repassword;
    // console.log(req)
    console.log(username)
    console.log(password)
    //用户名不能空
    if (username == '') {
        resData.code = 1;
        resData.message = '用户名不能为空';
        res.json(resData); //使用res.json的方法返回前端数据
        return;
    }
    //密码不能为空
    if (password == '') {
        resData.code = 2;
        resData.message = '密码不能为空';
        res.json(resData);
        return;
    }
    //两次密码不能不一样
    if (password != repassword) {
        resData.code = 3;
        resData.message = '两次输入的密码不一致';
        res.json(resData);
        return;
    }

    // 查找数据库有没有相同的用户名 ，没有的话保存到数据库
    db.User.findOne({
        username: username
    }).then(function (userInfo) {
        console.log("查询结果：" + userInfo); //若控制台返回空表示没有查到数据
        if (userInfo) {
            //若数据库有该记录
            resData.code = 4;
            resData.message = '用户名已被注册';
            res.json(resData);
            return;
        }
        //用户名没有被注册则将用户保存在数据库中
        var user = new db.User({
            username: username,
            password: password
        }); //通过操作对象操作数据库
        return user.save();
    }).then(function (newUserInfo) {
        resData.message = '注册成功';
        res.json(resData);
    });
})

module.exports = router;
