/*
* define modules and route
*/

const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
    request('http://localhost:3000/api/task/', function(error, response, body) {
        res.render('index', { page: "all", content: JSON.parse(body) });
    });
})

router.get('/not-started', (req, res) => {
    request('http://localhost:3000/api/task/not-started', function(error, response, body) {
        let url = req.url
        url = url.replace("/","");
        res.render('index', { page: url, content: JSON.parse(body) });
    });
})

router.get('/progress', (req, res) => {
    request('http://localhost:3000/api/task/progress', function(error, response, body) {
        let url = req.url
        url = url.replace("/","");
        res.render('index', { page: url, content: JSON.parse(body) });
    });
})

router.get('/done', (req, res) => {
    request('http://localhost:3000/api/task/done', function(error, response, body) {
        let url = req.url
        url = url.replace("/","");
        res.render('index', { page: url, content: JSON.parse(body) });
    });
})

module.exports = router;