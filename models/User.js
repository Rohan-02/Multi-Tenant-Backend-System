const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    tenentId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Tenent',
    },
    username :{
        type : String,
        required:true,
    },
    email :{
        type : String,
        required:true,
        lowercase:true,
    },
    password:{
        type : String,
        required:true,
    },
    role:{
        type : String,
        enum : ['Admin', 'User'],
        default : 'User'
    }
},{
    timestamps:true
})

module.exports = mongoose.model('User', UserSchema);