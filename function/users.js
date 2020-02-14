const User = require('../model/users').user

module.exports = {
    getUsers(){
        return User
            .find({})
            .sort({_id: -1})
            .exec()
    },
    getUsern(name){
        return User
            .find({name: name})
            .exec()
    },
    getUser(id){
        return User
            .findById(id)
            .exec()
    },
    editUser(id, data){
        return User
            .findByIdAndUpdate(id, data)
            .exec()
    },
    addUser(user){
        return User.create(user)
    },
    delUser(id){
        return User
            .findByIdAndRemove(id)
            .exec()
    }
}
