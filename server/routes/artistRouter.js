const express = require('express');
const bodyParser = require('body-parser');
const Artist = require('../models/artist');

const artistRouter = express.Router();
artistRouter.use(bodyParser.json());
artistRouter.route('/')

.get((req, res,next) => {
    Artist.find()
    .then(artists => {
        console.log('artists',artists);
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(artists);
    })
    .catch(err => next(err));
});

module.exports = artistRouter;