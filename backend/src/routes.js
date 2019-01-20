// routes.js
// =========
const uuidv1 = require('uuid/v1');
const ip = require("ip");
const a = ip.address();

module.exports.recieveTicket = function(client,req,res) {
  //recieve a .json file
  var ticket = req.body;
  ticket["id"] = uuidv1() + a ; // ⇨ '3b99e3e0-7598-11e8-90be-95472fb3ecbd'
  //console.log('INSERT INTO threeoneone.test JSON \'' + JSON.stringify(ticket) + '\' IF NOT EXISTS;');
  //create row in table
  client.execute('INSERT INTO threeoneone.test JSON \'' + JSON.stringify(ticket) + '\' IF NOT EXISTS;', function (err, result) {
    if(err){
      console.log(err);
    }
  });

  res.sendStatus(200);
}
