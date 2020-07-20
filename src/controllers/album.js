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


