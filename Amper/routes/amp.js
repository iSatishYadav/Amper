'use strict';
var express = require('express');
var router = express.Router();
var amp = require('../controllers/ampController');

/* GET users listing. */
router.get('/', amp.noGet).post("/", amp.htmlToAmp);

module.exports = router;
