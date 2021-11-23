var crypto = require('crypto');
var register= require('./router');
require('dotenv').config();
const exp=require('express');
const app=exp();
const bd=require('./bass1');
app.use(exp.static(__dirname+'/public'));
app.use(exp.urlencoded({extended:true,useUnifiedTopology: true}));
app.set('view engine','ejs');
app.set('/views','views');
app.use(exp.urlencoded({extended:true,useUnifiedTopology: true}));
app.listen(3000);
//connection to data base 
const mongoose=require('mongoose');
const url=process.env.AZ;
mongoose.connect(url,{ useUnifiedTopology: true,useNewUrlParser: true})
.then((result)=>{ 
    console.log("coonected"); 
}).catch((err)=>{
    console.log(err);
});
//route
app.use('/register',register);

