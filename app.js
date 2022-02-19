const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/' , (req , res)=>{
    res.send('we are at home');
});

mongoose.connect('mongodb://localhost:27017/Ecovia' , ()=> console.log('connected to db'));
app.listen(3000);