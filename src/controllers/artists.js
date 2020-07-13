/* src/controllers/artists.js */
const { Artist } = require('../models');

exports.create = (req, res) => {
    Artist.create(req.body).then(user => res.status(201).json(user));
};

exports.list = (req, res) => {
    Artist.findAll().then(artist => {
        res.status(200).json(artist);
    });
};

exports.getArtistById = (req, res) => {
    const { id } = req.params;
    Artist.findByPk(id).then(artist => {
        if (!artist) {
            res.status(404).json({ error: 'The artist could not be found.' });
        } else {
            res.status(200).json(artist);
        }
    });
};