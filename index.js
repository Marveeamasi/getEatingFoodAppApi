const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const itemsRoute = require('./routes/items');

//use .env
dotenv.config();
//connect to database
mongoose.set('strictQuery', false);
mongoose.connect
(process.env.MONGO_URL,
)
.then(()=>
 console.log('mongo connected')
 )
 .catch((err)=>{
    console.log(err)
});
 //middle ware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(helmet());
app.use(morgan('common'));
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/items', itemsRoute);
//run server
app.listen(8800, ()=>{
 console.log('Backend server running!');
});  
