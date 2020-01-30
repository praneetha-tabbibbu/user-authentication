const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/user', (req, res) => {
    User.find();
    res.send(User);
});

router.post('/user', (req, res) => {
    res.send('user');
});

module.exports = router;