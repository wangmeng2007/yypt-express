const mongoose=require('mongoose')
const http=require('http')
require('../model/users.js')
let app=require('../app')
let server=http.createServer(app)

mongoose.connect("mongodb://localhost/test",function (err) {
    console.log("mongodb 已连接!")
    if(!err){
        server.listen(3000,function (err) {
            if(!err){
                console.log("express 服务器已打开 ")
            }
        })
    }
})

server.on('close',function () {
    mongoose.disconnect()
})


// // MongoDB会自动建立books数据库
// const db = mongoose.connect('mongodb://localhost:27017/books')
//
// db.connection.on("error", function (error) {
//     console.log("数据库连接失败：" + error)
// })
//
// db.connection.on("open", function () {
//     console.log("数据库连接成功")
// })
