const { Comment } = require('../models');

const commentData = [{
        comment_text: "This is the best pizza I've ever made",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Awesome tips",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "So many languages, who would have known",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;