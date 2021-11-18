const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Having back all posts
router.get('/', async (req, res) => {
    try {
        const post = await Post.find();
        res.json(post);
    } catch (err) {
        res.json({message: err});
    }
});

//Submit post
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

//specific post
router.get('/:postId', (req, res) => {
    try {
        const post = Post.findId(req.params.postId);
        res.json(post);
    } catch {
        res.json({message: err});
    }
})

//Delete post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    } catch {
        res.json({message: err});
    }
})

//Update post
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne({_id: req.params.postId}, {
            set: {title: req.body.title}
        });
        res.json(updatePost);
    } catch {

    }
})
module.exports = router;