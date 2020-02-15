var mongoose = require("mongoose");  //  顶会议用户组件
var Schema = mongoose.Schema;    //  创建模型
//var ObjectID = schema.ObjectID;

var userScheMa = new Schema({
    name: {
        type:String,
        required:true},
    password:{
        type:String,
        required:true},
    age: {
        type:String,
        required:true}
}); //  定义了一个新的模型，但是此模式还未和users集合有关联

// 定义模型的模式
var musicScheMa = new Schema({
    Sname: 'String',
    Songer: 'String',
    Uploader: 'String',
    Stype:'String',
    uploadertime:'date',
    Note:'String',
    Surl:'String',
    clickcount:'String',
    special:'String'
});

var user = mongoose.model('users', userScheMa); //  与users集合关联
var music = mongoose.model('musics', musicScheMa); //  与users集合关联

module.exports={
    user,
    music
}
