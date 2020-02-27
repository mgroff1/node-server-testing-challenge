const express = require('express');
const cogs = require('../cogs/cogs-modules.js')
const server = express();

server.use(express.json());


server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
  });
  
  server.get('/cogs', (req, res) => {
    cogs.getAll()
      .then(cogs => {
        res.status(200).json(cogs);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = server;