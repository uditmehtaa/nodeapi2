const express=require('express');
const app=express();
app.use(express.json());


app.get('/getdata',(req,res)=>{
    res.send({
        "status":200,
        "message":"sucessfully get data"
    })
})

app.post('/insertdata',(req,res)=>{

    res.send({
        "status":200,
        "message":req.body
    })
})

app.delete('/deletedata',(req,res)=>{
    res.send({
        "status":200,
        "message":req.body,
        "parameter":req.params.id
    })
})

app.put('updatedata/:id',(req,res)=>{
    res.send({
        "status":200,
        "message":req.body,
        "parameter":req.params.id
    })

})
app.listen(3000,()=>{
    console.log("app is listening on 3000")
})
