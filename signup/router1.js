const express=require('express');
require('dotenv').config();
var app=express();

var wiki = require('./routerlogin');
require('dotenv').config();
app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({extended:true,useUnifiedTopology: true}));
app.set('view engine','ejs');
app.set('/views','views');
const g=require('./bass');
const mong=require('mongoose');
var crypto = require('crypto');
const url=process.env.AZ;
app.listen(8080);
console.log(url);
//connection to the mongoodb 
mong.connect(url,{ useNewUrlParser: true ,useUnifiedTopology: true })

.then((result)=>{
    
    console.log("bd connection");
    }).catch((err)=>{console.log(err);
});


//route login 
app.use('/login', wiki);
app.get('/',(req,res)=>{
res.render('test');
});
app.get('/logout',(req,res)=>{
    // redirect to homepage
    res.redirect('/');
});

