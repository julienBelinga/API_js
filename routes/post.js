const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('we are on post');
});

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    const savedPost = await post.save().exec().then(data => {
        res.json(data);
    }).catch(err => {
        res.json({message: err});
    })
});

module.exports = router;