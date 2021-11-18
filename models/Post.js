const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    date:{
        type: Date,
        default: Date.now()
    }
})

module.exports('/post', PostSchema);