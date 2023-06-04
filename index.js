const PeerServer = require('peer').PeerServer;

const port = process.env.PORT || 3000;

//log port 
console.log('iniciado en puerto: ' +port);


const server = PeerServer({
  port: port,
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