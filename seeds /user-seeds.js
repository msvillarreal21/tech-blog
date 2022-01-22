const { User } = require('../models');

const userData = [{
        username: 'Maria',
        password: '12345'

    },
    {
        username: 'Alicia',
        password: '12345'
    },
    {
        username: 'Raul',
        password: '12345'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;