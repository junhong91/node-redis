const express = require('express');
const router = express.Router();

const albums = require('./albums')

router
    .post('/album', albums.create)

module.exports = router