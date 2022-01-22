const { Post } = require('../models');

const postData = [{
        title: 'Recipies to make a pizza',
        content: 'Yummy pizza receipes ',
        user_id: 1

    }, 
    {
        title: 'How to care for a monstera',
        content: 'Tips and tricks to keep a monstera deliciosa alive and thriving',
        user_id: 2
    },
    {
        title: 'Coding',
        content: 'For the love of languages ',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;