// routes.js
// =========
const uuid = require('cassandra-driver').types.Uuid;

module.exports.recieveTicket = function(client,req,res) {
  //recieve a .json file
  var ticket = req.body;
	ticket["date"] = + Date();
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
module.exports.getTickets = function(client,req,res){
	var userId= req.params.userId;
	
	client.execute('SELECT tickets FROM threeoneone.users WHERE id = '+uuid.fromString(userId)+';', function(err, result) {
		if(err) {
			console.log(err);
		}
		console.log(result);
  	res.sendStatus(200);
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
