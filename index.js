const fs = require('fs')
const mongoose = require('mongoose');
const express = require('express');
const os = require('os');


const app = express()
const PORT = 8000

app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');

app.get('/',(req,res) =>{
    return res.render('home');
});

app.listen(PORT,() => console.log('server is running at port',PORT));