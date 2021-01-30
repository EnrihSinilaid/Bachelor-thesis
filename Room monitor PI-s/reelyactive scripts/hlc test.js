
const BarnowlHci = require('barnowl-hci');
const Barnowl = require('barnowl');
const Barnacles = require('barnacles');

let barnowl = new Barnowl();
let barnacles = new Barnacles({ barnowl: barnowl });

barnowl.addListener(BarnowlHci, {}, BarnowlHci.SocketListener, {} );

barnacles.addListener({Barnowl:barnowl})
barnacles.on('keep-alive', function(event) {
  console.log(event.deviceId + ' remains at ' + event.receiverId);
});
