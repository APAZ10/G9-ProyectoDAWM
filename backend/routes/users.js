var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

/* GET users listing. */
router.get('/', function(req, res, next) {
    models.cuentas.findAll({
        attributes: { exclude: ["clave"] }
    })
    .then(cuentas => {
        res.json(cuentas)
    })
    .catch(error => res.status(400).send(error))
});

router.get('/:cuentaId', function(req, res, next) {
    models.cuentas.findOne({
        attributes: { exclude: ["clave"] },
        where: {
            id: req.params.cuentaId
        }
    })
    .then(cuenta => {
        res.json(cuenta)
    })
    .catch(error => res.status(400).send(error))
});

router.post('/add', function(req, res, next) {
  var cuenta = req.body;
  models.cuentas.create({
    usuario: cuenta.usuario,
    correo: cuenta.correo,
    clave: cuenta.clave,
    tipo: cuenta.tipo,
    nombre: cuenta.nombre,
    telefono: cuenta.telefono
  })
    .then(cuenta => {
      res.json(cuenta)
    })
    .catch(error => res.status(400).send(error))
});

router.patch('/:cuentaId', function(req, res, next) {
  var cuenta = req.body;
  models.cuentas.update({
    usuario: cuenta.usuario,
    correo: cuenta.correo,
    clave: cuenta.clave,
    nombre: cuenta.nombre,
    telefono: cuenta.telefono
  }, {
    where: {
      id: req.params.cuentaId
    }
  })
    .then(cuenta => {
      res.json(cuenta)
    })
    .catch(error => res.status(400).send(error))
});

router.delete('/:cuentaId', function(req, res, next) {
  models.comentarios.destroy({
      where: {
        id: req.params.cuentaId
      }
    })
    .then(response => {
      res.json(response)
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;
