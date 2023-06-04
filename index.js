const PeerServer = require('peer').PeerServer;
const server = PeerServer({
  port: 3000,
  path: '/myapp',
  allow_discovery: true,
  key: 'peerjs', // Agregamos esta línea
  // Otras opciones de configuración...
});

server.on('connection', (client) => {
  console.log(`Cliente conectado: ${client.getId()}`);
});

server.on('disconnect', (client) => {
  console.log(`Cliente desconectado: ${client.getId()}`);
});