// routes.js
// =========
const uuid = require('cassandra-driver').types.Uuid;

module.exports.recieveTicket = function(client,req,res) {
  //recieve a .json file
  var ticket = req.body;
	ticket["date"] = parseInt(+ new Date());
	ticket["id"] = uuid.random();
  //console.log('INSERT INTO threeoneone.test JSON \'' + JSON.stringify(ticket) + '\' IF NOT EXISTS;');
  //create row in table
  client.execute('INSERT INTO threeoneone.tickets JSON \'' + JSON.stringify(ticket) + '\';', function (err, result) {
    if(err){
      console.log(err);
    }
  });

	client.execute('UPDATE threeoneone.users SET tickets = tickets + { '+ ticket["id"] + '} where id = '+ ticket["userid"] + ';', function(err, result) {
		if(err) {
			console.log(err);
		}
	});

  res.sendStatus(200);
}

//https://stackoverflow.com/questions/19696240/proper-way-to-return-json-using-node-or-express
module.exports.sendTicket = function(client,req,res){
  //will send our ticket to the main client

}

module.exports.returnTable = function(client,req,res){
  //lets return the entire table as a json
  client.execute('select json  * from threeoneone.tickets ;', function (err, result) {
		if(err) {
			console.log(err);
		}
    //console.log(result["rows"]);
    var list = [];

    result["rows"].map((data) => {
      list.push(data['[json]']);
    });
    console.log(list);
    res.send(list);
	});
}

module.exports.createUser = function(client, req, res) {
	var user = req.body;
	user["id"] = uuid.random();
	user["datejoined"] = new Date().getTime();
	client.execute('INSERT INTO threeoneone.users JSON\'' + JSON.stringify(user) + '\';', function (err, result) {
		if(err) {
			console.log(err);
		}
	});
	res.sendStatus(200);
}
