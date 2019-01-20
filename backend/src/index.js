// index.js
// =========
//imported functions
var routes = require("./routes.js");
//Depenedencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cassandra = require('cassandra-driver');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const authProvider = new cassandra.auth.PlainTextAuthProvider('backend', 'password');



const client = new cassandra.Client({ contactPoints: ['localhost'],localDataCenter: 'datacenter1', authProvider: authProvider});

app.listen(8080,'169.233.207.180');
app.use(jsonParser);

client.connect(function (err) {
  if(err){
    console.log(err);
  }
  app.post("/submitTicket", (req, res) => routes.recieveTicket(client,req,res));


});
