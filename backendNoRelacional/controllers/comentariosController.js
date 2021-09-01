var ComentariosModel = require('../models/comentariosModel.js');

/**
 * comentariosController.js
 *
 * @description :: Server-side logic for managing comentarioss.
 */
module.exports = {

    /**
     * comentariosController.list()
     */
    list: function (req, res) {
        ComentariosModel.find(function (err, comentarioss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting comentarios.',
                    error: err
                });
            }

            return res.json(comentarioss);
        });
    },

    /**
     * comentariosController.getComments()
     */
     getComments: function (req, res) {
        var id = req.params.id;
        var idUsuario = req.params.idUsuario;
        ComentariosModel.find({idCancha: id, idCuenta:idUsuario},function (err, comentarioss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting comentarios.',
                    error: err
                });
            }

            return res.json(comentarioss);
        });
    },

    /**
     * comentariosController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ComentariosModel.findOne({_id: id}, function (err, comentarios) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting comentarios.',
                    error: err
                });
            }

            if (!comentarios) {
                return res.status(404).json({
                    message: 'No such comentarios'
                });
            }

            return res.json(comentarios);
        });
    },

    /**
     * comentariosController.create()
     */
    create: function (req, res) {
        var comentarios = new ComentariosModel({
			idCuenta : req.body.idCuenta,
			idCancha : req.body.idCancha,
			idComentario : req.body.idComentario,
			fecha : req.body.fecha,
			mensaje : req.body.mensaje
        });

        comentarios.save(function (err, comentarios) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating comentarios',
                    error: err
                });
            }

            return res.status(201).json(comentarios);
        });
    },

    /**
     * comentariosController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ComentariosModel.findOne({_id: id}, function (err, comentarios) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting comentarios',
                    error: err
                });
            }

            if (!comentarios) {
                return res.status(404).json({
                    message: 'No such comentarios'
                });
            }

            comentarios.idCuenta = req.body.idCuenta ? req.body.idCuenta : comentarios.idCuenta;
			comentarios.idCancha = req.body.idCancha ? req.body.idCancha : comentarios.idCancha;
			comentarios.idComentario = req.body.idComentario ? req.body.idComentario : comentarios.idComentario;
			comentarios.fecha = req.body.fecha ? req.body.fecha : comentarios.fecha;
			comentarios.mensaje = req.body.mensaje ? req.body.mensaje : comentarios.mensaje;
			
            comentarios.save(function (err, comentarios) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating comentarios.',
                        error: err
                    });
                }

                return res.json(comentarios);
            });
        });
    },

    /**
     * comentariosController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ComentariosModel.findByIdAndRemove(id, function (err, comentarios) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the comentarios.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
