const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        max:500,
    },
    img:{
        type:String,
    },
    categories:{
        type:Array,
        default:[],
    },
    likes:{
        type:Array,
        default:[],
    },
    dislikes:{
        type:Array,
        default:[],
    },
    quantity:{
        type:String,
    },
    price:{
        type:Number,
    }, 
    capacity:{
        type:String,
        default:'unit',
    },
},
{timestamps:true}
);

module.exports = mongoose.model('Item', ItemSchema);