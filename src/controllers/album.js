const { Artist } = require('../models');
const { Album } = require('../models');
const album = require('../models/album');

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

exports.updateAlbum = (req, res) => {
    const { artistId } = req.params;
    Artist.findByPk(artistId).then((foundArtist) => {
        if (!foundArtist) {
            res.status(404).json({ error: 'The artist could not be found.' });
        } else {
            Album.update(req.body, { where: { artistId: foundArtist.id } }).then(
                (updatedAlbum) => {
                    res.status(200).json(updatedAlbum);
                }
            );
        }
    });
};

