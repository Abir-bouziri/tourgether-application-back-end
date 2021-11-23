const mon=require('mongoose');
require('dotenv').config('./config.env');
const schema=mon.Schema;
var cl1=new schema({
    username:{
        type:String,
       
      },
   email:{
       type:String,
      
   },
   pass:{
       type:String,
       
       minlength:8,
   },
   birthday:{
    type:String,
    
},
other_email:{
    type:String,
  
    
},
phone:{
    type:String,
   
   
},
gender:{
    type:String,
  
    
},
country:{
    type:String,
    
    
},


});
const user=mon.model("abir",cl1);
module.exports=user;
