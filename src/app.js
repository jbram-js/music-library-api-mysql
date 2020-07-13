const express = require('express');

const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');
const artistControllers = require('./controllers/artists');

const app = express();

app.use(express.json());

app.post('/artists', artistControllers.create);

app.get('/artists', artistControllers.list);

module.exports = app;
