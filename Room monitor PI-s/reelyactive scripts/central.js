const Barnowl = require('barnowl');
const BarnowlHci = require('barnowl-hci');
const HLCServer = require('hlc-server');
const BarnaclesWebhook = require('barnacles-webhook'); // 1: Include the package

let app = new HLCServer();
let barnowl = new Barnowl({ enableMixing: true });
app.addListener(BarnowlHci, {}, BarnowlHci.SocketListener, {} );
// 2: Add the interface with relevant options
app.addInterface(BarnaclesWebhook, { hostname: "127.0.0.1", port: 3000 });
