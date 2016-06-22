require('crypto');

var CEXWebsocketURL = 'wss://ws.cex.io/ws/';

var WebSocketClient = require('websocket').client;
var client = new WebSocketClient();


client.on('connectFailed', function(error) {
  console.log('Connect Error: ' + error.toString());
});


client.on('connect', function(connection) {
  console.log('WebSocket Client Connected');

  // Connection error
  connection.on('error', function(error) {
    console.log("Connection Error: " + error.toString());
  });

  // Connection closed
  connection.on('close', function() {
    console.log('echo-protocol Connection Closed');
  });

  // Connection incoming message
  connection.on('message', function(message) {
    if (message.type === 'utf8') {
      console.log("Received: '" + message.utf8Data + "'");
    }
  });

  // function sendNumber() {
  //   if (connection.connected) {
  //     var number = Math.round(Math.random() * 0xFFFFFF);
  //     connection.sendUTF(number.toString());
  //     setTimeout(sendNumber, 1000);
  //   }
  // }
  // sendNumber();
});

client.connect(CEXWebsocketURL);
