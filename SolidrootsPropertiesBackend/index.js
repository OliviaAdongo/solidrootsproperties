const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from SolidRootsBackend Server server updated first");
});

mongoose
  .connect(
    "mongodb://adongoolivia0698:0MlHGDCtvn1k7xXp@backenddatab-shard-00-00.twijb.mongodb.net:27017,backenddatab-shard-00-01.twijb.mongodb.net:27017,backenddatab-shard-00-02.twijb.mongodb.net:27017/?ssl=true&replicaSet=atlas-endxfc-shard-0&authSource=admin&retryWrites=true&w=majority&appName=BackendDataB"
  )
  .then(() => {
    console.log("Connected to SolidRootsProperties Backend Successfully!!");
  })
  .catch(() => {
    console.log("Not Connected Succesfully!!!");
  });

