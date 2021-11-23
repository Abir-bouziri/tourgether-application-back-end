var crypto = require('crypto');
const exp=require('express');
const app=exp();
const bd=require('./bass1');
app.use(exp.static(__dirname+'/public'));
app.use(exp.urlencoded({extended:true,useUnifiedTopology: true}));
app.set('view engine','ejs');
app.set('/views','views');
const  getform=(req,res)=>{
    res.render('test3',{title:'Inscription'});
    console.log('okay bb');
};
const postformu=(req,res)=>{
    var bd1= new bd(req.body);
    var e=require('email-existence');
e.check(req.body.email, function(error, response){
    console.log('res: '+response);


if(response==true)
        //email doesn't exist or not 
         {bd.findOne({email:bd1.email},(g,err)=>{
            if(err)
            //email does exit 
            {res.render('otheremuser',{title:'inscription',u:bd1.username});}
            else
         {//pass est verifier     

 if( (bd1.pass===bd1.rep))
    //save the data
        { var text = bd1.pass;

            // On définit notre algorithme de cryptage
            var algorithm = process.env.ALGORITHME;
            
            // Notre clé de chiffrement, elle est souvent générée aléatoirement mais elle doit être la même pour le décryptage
            var password =process.env.ABIRPASS;
            
            // On crypte notre texte
            var cipher = crypto.createCipher(algorithm,password);
            var crypted = cipher.update(text,'utf8','hex');
            crypted += cipher.final('hex');
            bd1.pass=crypted;
            var text1 = bd1.rep;

        
            
            // On crypte notre texte
            var cipher = crypto.createCipher(algorithm,password);
            var crypted1 = cipher.update(text1,'utf8','hex');
            crypted1 += cipher.final('hex');
            bd1.rep=crypted1;
            bd1.save().then((result)=>{
        console.log('utilisateur enregistréé');
       res.render('wp',{u:bd1.username});
     }).catch((err)=>{
        console.log(err);
    });}
    //do not save the data 
    else
         {
             res.render('passwrong',{title:'inscription',u:bd1.username,u1:bd1.email});
             var a=new bd(req.body);
         
         
             console.log(req.body);
            while(a.pass===a.rep)
            //save the data
                { bd1.save().then((result)=>{
                console.log('utilisateur enregistréé');
               res.render('wp',{u:a.username});
             }).catch((err)=>{
                console.log(err);
            });} }
        }
});
         }
        else{
             console.log("abroucha ya 5ayeb");
             {res.render('emaildo',{title:'inscription',u:req.body.username});}
         }
        });
};
module.exports={
    getform,postformu};
