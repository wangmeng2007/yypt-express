const mongoose = require("mongoose");  //  顶会议用户组件
const Schema = mongoose.Schema;    //  创建模型

var musicScheMa = new schema({
    // book: String
    title: {
        unique: true,
        type: 'String',
    },
    descript: 'String',
    price: 'Number',
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        }
    }
});

exports.music = mongoose.model('musics', musicScheMa); //  与musics集合关联
