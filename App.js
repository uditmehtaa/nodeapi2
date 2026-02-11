const express=require("express");
const cors=require('cors')
const indexrouter=require('./Router/Route')
const app=express(); 
app.use(express.json())
app.use(cors())

app.set("view engine", "ejs");

app.use('/',indexrouter)

 app.listen(3000,(err)=>{
       if(err){
        console.log("Opsie wopsie! your code caught some error :( ")
       }
       console.log("Congrats, your code has been run successfully!")                  
}  
)