const{ MongoClient}=require("mongodb");
const url ="mongodb+srv://udit1:udit@cluster0.3fhgbtw.mongodb.net/";
const client =new MongoClient(url);

async function connectDB() {
    try{
        await client.connect();
        console.log("Connected to Mongodb!");

        const db=client.db("API");
        return db;
    }catch(err)
{
    console.error(err);
}    
}

module.exports ={connectDB};
