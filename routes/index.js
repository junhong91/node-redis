const express = require('express');
const router = express.Router();

const posts = require('./posts')

router
    .get('/posts/:id', posts.show)
    .post('/post', posts.create)

module.exports = router