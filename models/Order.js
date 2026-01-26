const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    tenentId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Tenent',
        required: true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true
    },
    status : String,
    amount :{
        type : Number,
        required:true,
    }

},{
    timestamps:true
})

module.exports = mongoose.model("Order", OrderSchema);