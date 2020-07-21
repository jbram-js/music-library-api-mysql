const express = require('express');

const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');

const artistControllers = require('./controllers/artists');
const albumControllers = require('./controllers/album');

const app = express();

app.use(express.json());

// Artist

app.post('/artists', artistControllers.create);

app.get('/artists', artistControllers.list);

app.get('/artists/:id', artistControllers.getArtistById);

app.patch('/artists/:id', artistControllers.updateArtist);

app.delete('/artists/:id', artistControllers.deleteArtist);

// Album

app.post('/artists/:artistId/albums', albumControllers.createAlbum);

app.get('/artists/:artistId/albums', albumControllers.getAlbumsByArtistId);

module.exports = app;
