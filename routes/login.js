const mongoose=require('mongoose')
var express = require('express');
var router = express.Router();
const db = require('../model/users').user

//定义返回变量格式
var resData;
router.use(function (req, res, next) {
    resData = {
        code: 0,
        message: ''
    };
    next();
})

// router.get('/', function (req, res) {
//     res.render('login');
// });
router.post('/', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    console.log(username)
    if (username === '' || password === '') {
        resData.code = 1;
        resData.message = '用户名或密码不能为空';
        res.json(resData);
        return;
        // res.send('用户名或密码不能为空');
    }
    //查询数据库验证用户名和密码
    db.findOne({
        name: username,
        password: password
    }).then(function (userInfo) {
        if (!userInfo) {
            resData.code = 2;
            resData.message = '用户名或密码错误';
            res.json(resData);
            return;
        }
        //验证通过则登录
        resData.message = '登录成功';
        resData.userInfo = {
            _id: userInfo._id,
            name: userInfo.username
        };
        console.log(userInfo)
        res.json(resData);
        return;
    })

})

module.exports = router;
