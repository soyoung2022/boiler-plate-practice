const mongoose = require('mongoose');

const userSchemea = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,     // 이메일을 작성했을 때 사용자가 실수로 공백을 포함하면 그것 없애준다.
        unique: 1
    },
    password: {
        type: String,
        minlength: 8
    },
    role: {
        type: Number,
        default: 0
    },
    image: {
        type: String
    },
    token: {        // 나중에 토큰으로 유효성 관리할 것이다.
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const user = mongoose.model('user', userSchemea)

module.exports = {user}     // 다른 파일에서 사용할 수 있도록 모델을 export 해놓기