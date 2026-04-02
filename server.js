const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static("Public"));

// 🔴 Replace password
const uri = "mongodb+srv://aakanksha:Aakanksha%402007@portfolio.t6ot00s.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function start() {
  await client.connect();
  console.log("✅ MongoDB Connected");

  const db = client.db("crm");

  const leadRoute = require("./lead")(db);
  app.use("/api/lead", leadRoute);

  app.listen(3000, () => {
    console.log("🚀 http://localhost:3000");
  });
}

start();