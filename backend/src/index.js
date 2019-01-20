//Depenedencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cassandra = require('cassandra-driver');
const authProvider = new cassandra.auth.PlainTextAuthProvider('backend', 'password');



const client = new cassandra.Client({ contactPoints: ['localhost'],localDataCenter: 'datacenter1', authProvider: authProvider});

app.listen(8080,'169.233.207.180');
client.connect(function (err) {
  if(err){
    console.log(err);
  }
  app.get("/", (req, res) => res.send("Hello World!"));


});
