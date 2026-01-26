const mongoose = require("mongoose");

const TenentSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique:true
    },
    status:{
        type : String,
        enum:['Active', 'Inactive'],
        default : 'Active'
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Tenent", TenentSchema);