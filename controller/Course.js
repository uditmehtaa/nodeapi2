const database=require('../Database/db')

const getcoursedata=async(req,res)=>{
    try{
    const db=await database.connectDB();
    const result = await db.collection("Course").find({}).toArray()
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

const postcoursedata= async (req,res) => {
    try{
     const db=await database.connectDB();
    const result = await db.collection("Course").insertOne(req.body);
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

const putcoursedata=  async(req,res) =>{
    try{
         const db=await database.connectDB();
    const result = await db.collection("Course").updateOne({"name": req.params.name}, { $set: req.body  });
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

   const deletecoursedata= async(req,res) => {
    try{
         const db=await database.connectDB();
    const result = await db.collection("Course").deleteOne({"name": req.params.name});
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


module.exports={getcoursedata,postcoursedata,putcoursedata,deletecoursedata}