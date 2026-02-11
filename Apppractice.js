const{ Mongoclient}=require("mongodb");
const url="mongodb://localhost:27017";
const client=new Mongoclient(url);

async function connectdb() {
    try{
        await client.connect();
        console.log("Connected to Mongodb!");

        const db=client.db("local");
        return db;
    }catch(err)
{
    console.error(err);
}    
}

module.exports ={connectdb};
