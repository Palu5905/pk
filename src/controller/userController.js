const usermodel=require('../model/usermodel')




const createuser=async (req,res)=>{
    try{
    const userData=req.body
    if(!userData)
   return res.status(400).send({status:false,Msg:"Plaese Enter userData" })

    const createdata=await usermodel.create(userData)
    res.status(200).send({status:true,userInfo:createdata})
}
catch(error){
    res.status(500).send({status:false,msg:error.message})
}
}



module.exports={createuser}