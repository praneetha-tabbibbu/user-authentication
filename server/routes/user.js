const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/user', (req, res) => {
    User.find();
    res.send(User);
});

router.post('/user', (req, res) => {
    const body = req.body;
    const user = new User(body);
    user.save();
    res.send(user);
});

module.exports = router;