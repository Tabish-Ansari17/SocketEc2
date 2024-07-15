const express = require('express');
const app = express();
const port = 3000; // Choose any port you prefer
// const WebSocket = require('ws');
// const wss = new WebSocket.Server({ port: 8080 });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// wss.on('connection', ws => {
//   ws.on('message', message => {
//     console.log("Received: ${message}");
//     ws.send("Hello, you sent -> ${message}");
//   });
//   ws.send('Hi there, I am a WebSocket server');
// });

console.log('WebSocket server is running on ws://localhost:8080')
