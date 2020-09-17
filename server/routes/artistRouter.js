const express = require('express');
const bodyParser = require('body-parser');
const artists = require('../data/artists');

const artistRouter = express.Router();

artistRouter.use(bodyParser.json());

artistRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.json(artists);
});

module.exports = artistRouter;