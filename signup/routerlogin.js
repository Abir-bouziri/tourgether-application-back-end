var crypto = require('crypto');
const cont=require('./cont');
const g=require('./bass');
const express=require('express');
require('dotenv').config();
var app=express();
const mong=require('mongoose');
const url='mongodb+srv://abir:abir@database.ckyde.mongodb.net/database?retryWrites=true&w=majority';


app.use(express.static(__dirname + '/public'));
var router = express.Router();
router.use(express.urlencoded({extended:true,useUnifiedTopology: true}));

//get to page formulaire
router.get('/',cont.getlog);
//remplir la formulaire a partir du champ de l'utilisateur login   
router.post('/',cont.post);
//update les données dans la database
router.post('/image',cont.add);


module.exports = router;