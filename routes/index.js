var express = require('express');
var router = express.Router();

const database = require('../model/databaseMySQLPromises');
const path = require(`path`);
const toiletModule = require('../model/publicToiletsModule');

router.get('/', function (req, res, next) {
    // res.render('index');
    res.render('index', {page: req.path});
});

router.get('/resurcer', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../views/ResurcerTilHjemlose.html'));
});

router.get('/indtastning', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../views/Indtastning.html'));
});

router.get('/ships', async function (req, res, next) {
    // database.read("skibsdata")
    //     .then(value => res.render('table', {shipData: value, page: req.path}))
    //     .catch(reason => next(reason));

    try {
        let shipData = await database.read("skibsdata");
        let sensorData = await database.read("sensordata");
        // res.render('table', {shipData: shipData, sensorData: sensorData});
        res.render('table', {shipData: shipData, sensorData: sensorData, page: req.path});
    } catch (e) {
        next(e);
    }
});

router.get('/moduleJSON', async function (req, res, next) {
    res.send(await toiletModule.getToilets());
});

router.get('/moduleTable', async function (req, res, next) {
    let toiletsArray = await toiletModule.getToilets();
    res.render('toilets', {data: toiletsArray, page: req.path});
});

router.post('/login', function (req, res, next) {
    let user = req.body.user;
    let pass = req.body.pass;
    res.send(`You have logged in. User: ${user}. Pass: ${pass}.`)
});

router.get('/test', function (req, res, next) {
    res.render('test');
});

router.get('/api', function (req, res, next) {
    res.render('api', {page: req.path});
});

module.exports = router;
