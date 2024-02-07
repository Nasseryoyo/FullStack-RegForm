if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");

const port = 8000;
const app = express();
const router = require("./routes/index");
const uri = process.env.MONGO_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db = client.db("My App");

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await db.command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB the My App database!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

// Mount the router on the main app
app.use("/", router);
app.listen(port, () => console.log(`Server listening on port ${port}!`));