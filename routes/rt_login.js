const express = require('express');
const {
    login
} = require('../controllers/ct_login');

const router = express.Router();

router.post('/login', login);

module.exports = router;