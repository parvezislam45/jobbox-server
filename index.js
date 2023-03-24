const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 9000;

const cors = require("cors");

app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://parvezislam45:qnFECn9SnKDwaSpw@cluster0.xrxc0ex.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run (){
    try{
        await client.connect();
        const jobCollection = client.db("jobCollection").collection("collection");
        app.post("/user", async (req, res) => {
            const user = req.body;
      
            const result = await jobCollection.insertOne(user);
      
            res.send(result);
          });
    }
    finally { }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Alhamdulliah Your server is Running");
});
app.listen(port, () => {
  console.log("Alhamdullilah Your server is Start");
});