const mongoose = require('mongoose')

const schema = new mongoose.Schema({
        username: { type: String },
        phone: { type: String },
        password: {
            type: String,
            select: false,
            set(val) {
                return require('bcrypt').hashSync(val, 10)
            }
        }
    })
    // select为false的时候获取用户密码默认不存在
module.exports = mongoose.model('user', schema, "users")