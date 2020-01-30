const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to DB...');
    })
    .catch(() => {
        console.log('Error in connecting to DB...');
    });

module.exports = mongoose;