var Barnacles = require('barnacles');
var Barnowl = require('barnowl');
const BarnowlHci = require('barnowl-hci');

// MQTT Setup
var mqtt = require('mqtt');

var PORT = 1883;
var ID = 'reelyActive-cerberos';
var LWT_TOPIC = 'status/reelyActive/cerberos';
var LWT_PAYLOAD = 'reelyActive cerberos is down';
var PUB_TOPIC = 'reelyActive/cerberos';

// See https://github.com/mqttjs/MQTT.js/blob/master/examples/client/secure-client.js for a TLS example
// See https://www.npmjs.com/package/mqtt#client for available options
var options = {
  port: PORT,
  clientId: ID,
  will: {
    topic: LWT_TOPIC,
    payload: LWT_PAYLOAD
  }
};

client = mqtt.connect('mqtt://192.168.1.216', options);
// END MQTT Setup

// reelyActive Setup
let barnowl = new Barnowl();
let barnacles = new Barnacles({ barnowl: barnowl });


barnowl.addListener(BarnowlHci, {}, BarnowlHci.SocketListener, {} );

// Event Handler
barnacles.on('raddec', function(event){
  // appears
  handleEvent(event);
});

function handleEvent(event) {
//  var flattenedEvent = reelib.event.toFlattened(event);
  console.log(JSON.stringify(event, null, 2))
  client.publish(PUB_TOPIC, JSON.stringify(event));
};

