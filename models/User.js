const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true,
    },
    password:{
        type:String,
       required:true,
        min:6,
    },
    profilePicture:{
        type:String,
        default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcP5xrmr54Z4Bqb4BOFLmweLGEmT-Tn1hfqK7J2beas9lTNxrDE2VjPgV6Th1NXkEB5qU&usqp=CAU',
    },
    brandPicture:{
        type:String,
        default:'https://www.shutterstock.com/image-photo/bubble-speech-cut-out-phrase-260nw-369907355.jpg',
    },
    phone:{
        type:Number,
        default:00000000000,
    },
    country:{
        type:String,
        default:'',
    },
    state:{
        type:String,
        default:'',
    },
    address:{
        type:String,
        default:'',
    }, 
    isAdmin:{
        type:Boolean,
        default:false,
    },
},
{timestamps:true}
);

module.exports = mongoose.model('User', UserSchema);