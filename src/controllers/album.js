const { Artist } = require('../models');
const { Album } = require('../models');

exports.createAlbum = (req, res) => {
    const { artistId } = req.params;

    Artist.findByPk(artistId).then((artist) => {
        if (!artist) {
            res.status(404).json({ error: 'The artist could not be found.' });
        } else {
            Album.create(req.body).then((createAlbum) => {
                createAlbum.setArtist(artist).then((album) => {
                    res.status(201).json(album);
                });
            });
        }
    });
};

exports.getAlbumsByArtistId = (req, res) => {
    const { artistId } = req.params;

    Artist.findByPk(artistId).then((artist) => {
        if (!artist) {
            res.status(404).json({ error: 'The artist could not be found.' });
        } else {
            Album.findAll({ where: { artistId } }).then((albums) => res.status(200).json(albums));
        }
    });
};

exports.updateAlbumById = (req, res) => {
    const { albumId } = req.params;

    Album.update(req.body, { where: { id: albumId } }).then(([rowsUpdated]) => {
        if (!rowsUpdated) {
            res.status(404).json({ error: 'The album could not be found.' });
        } else {
            res.status(200).json(rowsUpdated);
        }
    });
};

exports.deleteAlbum = (req, res) => {
    const { albumId } = req.params;
    Album.destroy({ where: { id: albumId } }).then(deleted => {
        if (!deleted) {
            res.status(404).json({ error: 'The album could not be found.' });
        } else {
            res.status(204).json(deleted);
        }
    });
};