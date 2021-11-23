var crypto = require('crypto');
const express=require('express');
var router=express.Router();
const bd=require('./bass1');
const reg=require('./controller');

//afficher la formulaire
router.get('/',reg.getform);
//save the data in the database
router.post('/',reg.postformu);
module.exports=router;