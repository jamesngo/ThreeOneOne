//Depenedencies
const express = require('express');
const bodyParser = require('body-parser');
//const cassandra = require('cassandra-driver');

//Set up Cassandra Server Connection
//const authProvider = new cassandra.auth.PlainTextAuthProvider('cassandra', 'cassandra');
//Set the auth provider in the clientOptions when creating the Client instance
//const client = new cassandra.Client({contactPoints:['127.0.0.1'], authProvider: authProvider });

/*client.connect(function (err) {
  console.log(err);
});*/
const cassandra = require('cassandra-driver');
const authProvider = new cassandra.auth.PlainTextAuthProvider('backend', 'password');

const client = new cassandra.Client({ contactPoints: ['169.233.239.56'],localDataCenter: 'datacenter1', authProvider: authProvider});
client.connect(function (err) {
  console.log(err);
});
