const mongoose=require('mongoose')


const userschema =new mongoose.Schema({
     firstName:{
        type:String,
        require:true
     },
     lastName:String,
     gmail:{
        type:String,
        require:true
     },
     mobile:{
      type:Number
     },
     age:{
        type:Number,
        require:true
     },
     city:String,
     gender:{
        type:String,
        enum:["male","female"]
     },
     isindina:{
        type:Boolean,

     }
},{timestamps:true})




module.exports=mongoose.model('sunny',userschema)