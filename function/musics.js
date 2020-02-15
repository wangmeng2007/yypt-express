const Music = require('../model/users').music

module.exports = {
    getMusics(){
        return Music
            .find({})
            .sort({_id: -1})
            .exec()
    },
    getMusicn(Sname){
        return Music
            .find({Sname: Sname})
            .exec()
    },
    getMusicn2(special){
        return Music
            .find({special: special})
            .exec()
    },
    getMusic(id){
        return Music
            .findById(id)
            .exec()
    },
    editMusic(id, data){
        return Music
            .findByIdAndUpdate(id, data)
            .exec()
    },
    addMusic(music){
        return Music.create(music)
    },
    delMusic(id){
        return Music
            .findByIdAndDelete(id)
            .exec()
    }
}
