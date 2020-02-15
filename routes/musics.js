//const mongoose=require('mongoose')
const express = require('express');
var router = express.Router();
//var dbu = mongoose.model("users");
var dbm = require("../function/musics");

// //定义返回变量格式
// var resData;
// router.use(function (req, res, next) {
//     resData = {
//         code: 0,
//         message: ''
//     };
//     next();
// })

/* GET users listing. */
router.get('/', function(req, res, next) {
    dbm.getMusics()
        .then((musics) => {
            //res.render('../views/music-list.html', {musics})
            res.json(musics);
            return;
            //res.send(users)
        })
});
router.post('/find1', function(req, res, next) {
    let name = req.body.Sname
    console.log(name)
    dbm.getMusicn(name)
        .then((musics) => {
            //res.render('../views/music-list.html', {musics})
            res.json(musics);
            console.log(musics)
            return;
            //res.send(users)
        })
});
router.post('/find2', function(req, res, next) {
    let name = req.body.special
    dbm.getMusicn2(name)
        .then((musics) => {
            //res.render('../views/music-list.html', {musics})
            res.json(musics);
            return;
            //res.send(users)
        })
});
// router.get('/add', (req, res) => {
//     res.render('add')
// })

router.post('/add', (req, res) => {
    let music = req.body
    console.log(music)
    if (music.Sname == '' || music.Songer == '') {
        //resData.code = 1;
        //resData.message = '用户名或密码不能为空';
        //res.json(resData);
        //return;
        res.send('歌曲名称或演唱者不能为空');
        return;
    }
    dbm.addMusic(music)
        .then((result) => {
            res.redirect('/api/musics')
        })
})

router.post('/remove', (req, res) => {
    let musicId = req.body._id
    console.log(req.body._id)

    dbm.delMusic(musicId)
        .then((result) => {
            res.json(result)
            return
            //res.redirect('/')
        })
})

router.get('/:mussicId/edit', (req, res) => {
    let music = req.body
    dbm.getMusic(req.params.musicId)
        .then((music) => {
            res.render('edit', {
                music,
                musicid: req.params.musicId
            })
        })
})

router.post('/:musicId/edit', (req, res) => {
    let user = req.body
    dbm.editMusic(req.params.musicId, music)
        .then((result)=>{
            res.redirect('/')
        })
})

module.exports = router;

