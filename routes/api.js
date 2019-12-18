var express = require('express');
var router = express.Router();

const database = require('../model/databaseMySQLPromises');

router.get('/:id?', function (req, res, next) {
    database.read("resources", "resource_id", (req.params.id ? req.params.id : null))
        .then(value => res.send(value))
        .catch(reason => next(reason));
});

router.post('/', (req, res, next) => {
    database.create(req.body.city, req.body.category_id, req.body.resource_name, req.body.description, req.body.address, req.body.phone, req.body.open_hours, req.body.website)
        .then(value => res.redirect("/api/resurse/" + value))
        .catch(reason => next(reason));
});

router.put('/:id', (req, res, next) => {
    database.update(req.params.id, req.body.city, req.body.category_id, req.body.resource_name, req.body.description, req.body.address, req.body.phone, req.body.open_hours, req.body.website)
        .then(value => res.redirect("/api/resurse/" + req.params.id))
        .catch(reason => next(reason));
});

router.delete('/:id', (req, res, next) => {
    database.deleteSomething(req.params.id)
        .then(value => res.send(`Resursen med ID ${req.params.id} er slettet`))
        .catch(reason => next(reason));
});

module.exports = router;
