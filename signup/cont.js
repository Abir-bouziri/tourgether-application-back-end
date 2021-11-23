var crypto = require('crypto');
const g=require('./bass');
const exp=require('express');
require('dotenv').config();
var app=exp();
app.use(exp.static(__dirname+ '/public'));  
app.set('view engine','ejs');
app.set('/views','views');
const getlog=(req,res)=>{
   res.render('test3',{title:'Login'});
};
const post=(req,res)=>{
    //remplir la data
    var cl2=new g(req.body);
    g.countDocuments({email: req.body.email  },(g,err)=>{
        if(err)
        { console.log('email found'); 
     }
        else
     {res.render('login',{u:0}); console.log("cccccccccccccc")}
        
    }).then((result)=>{
        if(result==1)
        { 

        var text = cl2.pass;
        
        // On définit notre algorithme de cryptage
        var algorithm = process.env.ABIRAL;
        
        // Notre clé de chiffrement, elle est souvent générée aléatoirement mais elle doit être la même pour le décryptage
        var password = process.env.ABIRPASS;
        
        // On crypte notre texte
        var cipher = crypto.createCipher(algorithm,password);
        var crypted = cipher.update(text,'utf8','hex');
        crypted += cipher.final('hex');
        cl2.pass=crypted;
            g.findOne({pass: cl2.pass, email:cl2.email },(g,err)=>{
                if(err)
                {res.render('wp',{u:err.username , b:1});console.log(err);}
                else
             {console.log(" pass not found");
             res.render('login',{u:1 ,a:cl2.email});}
                
            });
        }
    
    });
    /*si le length de pwd > 8 
  /*  var n=req.body.pass.length;
    if (n<8)
    {console.log("a wrong password");}*/
};
//update data in database 
const add=(req,res)=>{

    // Find the document that describes 
const query = { "username": req.body.username };
// Set some fields in that document
const update = {
  "$set": {
    "country": req.body.country,
    "birthday": req.body.birthday,
    "phone": req.body.phone,
    "gender":req.body.gender,
    "other_email":req.body.EMAIL,
  }
};
// Return the updated document instead of the original document
const options = { returnNewDocument: true };
return g.findOneAndUpdate(query, update, options)
  .then(updatedDocument => {
    if(updatedDocument) {
      console.log(`Successfully updated document: ${updatedDocument}.`);
      res.render('wp',{u:req.body.username , b:0});
    } else {
      console.log("No document matches the provided query.");
      res.status(404);
    }
    return updatedDocument
  })
  .catch(err => console.error(`Failed to find and update document: ${err}`))

   

};
module.exports={
    getlog, post,add
};