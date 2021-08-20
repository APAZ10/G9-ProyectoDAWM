var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);
models.cuentas.belongsTo(models.personas, {foreignKey: 'personas_id', targetKey: 'id'});

/* GET users listing. */
router.get('/', function(req, res, next) {
    models.cuentas.findAll({
        include: [{ model: models.personas }],
        attributes: { exclude: ["clave", "personas_id"] }
    })
    .then(cuentas => {
        res.json(cuentas)
    })
    .catch(error => res.status(400).send(error))
});

router.get('/:usuarioId', function(req, res, next) {
    models.cuentas.findOne({
        include: [{ model: models.personas }],
        attributes: { exclude: ["clave", "personas_id"] },
        where: {
            id: req.params.usuarioId
        }
    })
    .then(cuenta => {
        res.json(cuenta)
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;
