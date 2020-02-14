const mongoose=require('mongoose')
const express = require('express');
var router = express.Router();
//var dbu = mongoose.model("users");
var dbu = require("../function/users");

/* GET users listing. */
router.get('/', function(req, res, next) {
  dbu.getUsers()
      .then((users) => {
        res.render('../views/user-list.html', {users})
        //res.send(users)
      })
  // dbu.find({}).exec(function (err,users) {
  //   if(!err) res.send( users);
  // })
});
router.post('/find', function(req, res, next) {
    let user = req.body
    let name = user.name1
    dbu.getUsern(name)
        .then((users) => {
            console.log(users)
            res.render('../views/user-list.html', {users})
        })
});
// router.get('/add', (req, res) => {
//   res.render('add')
// })

router.post('/add', (req, res) => {
  let user = req.body
    if (user.name === '' || user.password === '') {
        //resData.code = 1;
        //resData.message = '用户名或密码不能为空';
        //res.json(resData);
        //return;
        res.send('用户名或密码不能为空');
        return;
    }
  dbu.addUser(user)
      .then((result) => {
        res.redirect('/api/users')
      })
})

router.get('/:userId/remove', (req, res) => {
  dbu.delUser(req.params.userId)
      .then((user) => {
        res.redirect('/')
      })
})

router.get('/:userId/edit', (req, res) => {
  let user = req.body
  dbu.getUser(req.params.userId)
      .then((user) => {
        res.render('edit', {
          user,
          userid: req.params.userId
        })
      })
})

router.post('/:userId/edit', (req, res) => {
  let user = req.body
  dbu.editUser(req.params.userId, user)
      .then((result)=>{
        res.redirect('/')
      })
})

// router.post('/shanchu', function(req, res){
//   //let whereStr = {"biaoti":req.body.biaoti};  // 查询条件
//   //console.log(whereStr)
//   let id = req.body.name;
//   dbu.findByIdAndRemove(id,function (err) {
//     if(!err){
//       console.log("删除成功")
//     }
//   })
//   });

module.exports = router;
