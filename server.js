let express = require('express');
let osc = require('node-osc');

let app = express();
let server = app.listen(3000);

app.use(express.static('public'));

let oscServer, oscClient;

let isConnected = false;
//app.use(express.static('public'));
console.log("my socket server is running");

let socket = require ('socket.io');

let io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});


// needs to be rewritten to play nice with express app
io.sockets.on('connection', newConnection)



 function newConnection (socket) {
	console.log('connection');
		console.log('socket');
	socket.on("config", function (obj) {
		isConnected = true;
    	oscServer = new osc.Server(obj.server.port, obj.server.host);
	    oscClient = new osc.Client(obj.client.host, obj.client.port);
	    oscClient.send('/status', socket.sessionId + ' connected');
		oscServer.on('message', function(msg, rinfo) {
			socket.emit("message", msg);
		});
		socket.emit("connected", 1);
	});
 	socket.on("message", function (obj) {
		oscClient.send.apply(oscClient, obj);
  	});
	socket.on('disconnect', function(){
		if (isConnected) {
			oscServer.kill();
			oscClient.kill();
		}
  	});
};
