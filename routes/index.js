var express = require('express');
var router = express.Router();

const database = require('../model/databaseMySQLPromises');
const path = require(`path`);
const toiletModule = require('../model/publicToiletsModule');

router.get('/', function (req, res, next) {
    res.render('index', {page: req.path});
});

router.get('/resurcer', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../views/ResurcerTilHjemlose.html'));
});

router.get('/indtastning', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../views/Indtastning.html'));
});

router.get('/moduleJSON', async function (req, res, next) {
    res.send(await toiletModule.getToilets());
});

router.get('/moduleTable', async function (req, res, next) {
    let toiletsArray = await toiletModule.getToilets();
    res.render('toilets', {data: toiletsArray, page: req.path});
});

router.get('/api', function (req, res, next) {
    res.render('api', {page: req.path});
});

module.exports = router;
