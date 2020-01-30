const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/user', (req, res) => {
    res.send('user');
});

module.exports = router;