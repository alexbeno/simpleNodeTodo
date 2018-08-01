/*
* define modules and route
*/

const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
    request('http://localhost:3000/api/task/', function(error, response, body) {
        res.render('index', { content: JSON.parse(body) });
    });
})

module.exports = router;