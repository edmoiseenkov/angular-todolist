const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


const port = process.env.PORT || '3000';

const apiRoutes = require('./server/routes/api');

const app = express();

app.set('port', port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

// Routes 

app.use('/api', apiRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Create server

const server = http.createServer(app);

server.listen(port, () => console.log(`Server running on localhost:${port}`));