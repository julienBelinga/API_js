const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//import Routes
const postRoute = require('../routes/post');
app.use('/post', postRoute);
app.use('/user', userRoute);
app.use(bodyParser.json());

app.use('/post', () => {
    console.log('middleware running');
});

//routes
app.get('/', (req,res) => {
    res.send('we are home');
});

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, {userUrlParser: true}, () => console.log('connected to DB'));

app.listen(3000);
