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
const ip = require("ip");
const a = ip.address();


const client = new cassandra.Client({ contactPoints: ['127.0.0.1', '169.233.239.56'],localDataCenter: 'datacenter1', authProvider: authProvider});

app.listen(8080,a);
app.use(jsonParser);

client.connect(function (err) {
  if(err){
    console.log(err);
  }
  app.post("/submitTicket", (req, res) => routes.recieveTicket(client,req,res));
	app.get("/getTickets/:userId", (req, res) => routes.getTickets(client, req, res));//broken
  app.get("/returnTable", (req, res) => routes.returnTable(client, req, res));
	app.post("/createUser", (req, res) => routes.createUser(client, req, res));
	console.log("opened routes");
});
