const database=require('../Database/db')

const getteacherdata=async(req,res)=>{
    try{
    const db=await database.connectDB();
    const result = await db.collection("Teacher").find({}).toArray()
    res.send({
        "status": 200,
        "message": result
    })
}
catch(err)
{
res.send({
        "status": 200,
        "message":"Something went wrong"
})
}
}

const postteacherdata= async (req,res) => {
    try{
     const db=await database.connectDB();
    const result = await db.collection("Teacher").insertOne(req.body);
    if(result.acknowledged==true)
    {
    res.send({
        "status": 200,
        "massage": "record inserted successfully",
         
    })
   }
   else
   {
     res.send({
        
        "massage": "something went wrong , please try again",
         
    })
   }
}
catch(err)
{
      res.send({
        "status": 500,
        "massage": "something went wrong"+err,
        
    })
}
}

const putteacherdata=  async(req,res) =>{
    try{
         const db=await database.connectDB();
    const result = await db.collection("Teacher").updateOne({"name": req.params.name}, { $set: req.body  });
        if(result.acknowledged==true && result.matchedCount>0)
    {
    res.send({
        "status": 200,
        "massage": "updated sucessfully"
         
    })
   }
   else
   {
     res.send({
        
        "massage": "something went wrong , please try again",
         
    })
   }
}
        
    catch(err){
        res.send({
        "status": 500,
        "message" : "something went wrong"+err,
        })
    }
    } 

   const deleteteacherdata= async(req,res) => {
    try{
         const db=await database.connectDB();
    const result = await db.collection("Teacher").deleteOne({"name": req.params.name});
     if(result.acknowledged==true && result.deletedCount>0)
    {
    res.send({
        "status": 200,
        "massage": "record deleted successfully",
        "result":result
         
    })
   }
   else
   {
     res.send({
        
        "massage": "Record not found , please try again with diffrent name",
         
    })
   }
    
    }
    catch(err){
        res.send({
            "status": 400,
            "message": "oo darda kato aa singh"
        })
    }
}


module.exports={getteacherdata,postteacherdata,putteacherdata,deleteteacherdata}