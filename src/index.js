const {default:mongoose}=require('mongoose')
const bodyparser=require('body-parser')
const route=require('./route/route.js')
const express=require('express')
const app =express()
const PORT=3000


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))



mongoose.connect('mongodb+srv://myproject:tIsWH51HYBM3G6nV@cluster0.vvyvqcg.mongodb.net/test',{
})

.then(()=>{console.log("🤣 Bhookh Pyaas Nikat Nahin Aave Assignmaint Jab Haath Mein Aave 🤭🤭🤭")
})
.catch((err)=>{console.log(err)
})

app.use("/",route)



app.listen(PORT,(req,res)=>{
    console.log("Server is started  now PORT 3000")
})