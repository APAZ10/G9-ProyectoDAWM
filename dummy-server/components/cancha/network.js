const express = require('express');
const router = express.Router();

const response = require('../../network/response');
const controller = require('./controller');

router.get('/', function (req, res) {
    controller.getCanchas()
        .then((canchas) => {
            response.success(req, res, canchas, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error', 500, e);
        })
});

router.get('/:id', function (req, res) {
    controller.getCancha(req.params.id)
        .then((cancha) => {
            response.success(req, res, cancha, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error', 500, e);
        })
});

router.post('/add', function (req, res) {
    controller.addCancha(req.body)
        .then((cancha) => {
            response.success(req, res, cancha, 201);
        })
        .catch(e => {
            response.error(req, res, 'Información inválida', 400, e);
        });
});

router.patch('/update/:id', function (req, res) {
    controller.updateCancha(req.params.id, req.body)
        .then((cancha) => {
            response.success(req, res, cancha, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

router.delete('/delete/:id', function (req, res) {
    controller.deleteCancha(req.params.id)
        .then((eliminado) => {
            response.success(req, res, eliminado, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

module.exports = router;