const mon1=require('mongoose');

const schema=mon1.Schema;
var cl1=new schema({
    username:{
      type:String,
      required:true,
    },
   email:{
       type:String,
       required:true,
   },
   pass:{
       type:String,
       required:true,
       minlength:8,
   },
  rep:{
      type:String,
      required:true,
  },
},{ timestamps:true});
const user1=mon1.model("abir",cl1);
module.exports=user1;