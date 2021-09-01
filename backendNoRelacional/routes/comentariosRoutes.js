var express = require('express');
var router = express.Router();
var comentariosController = require('../controllers/comentariosController.js');

/*
 * GET
 */
router.get('/', comentariosController.list);

/*
 * GET
 */
router.get('/canchas/:id&:idUsuario', comentariosController.getComments);

/*
 * GET
 */
router.get('/:id', comentariosController.show);

/*
 * POST
 */
router.post('/', comentariosController.create);

/*
 * PUT
 */
router.put('/:id', comentariosController.update);

/*
 * DELETE
 */
router.delete('/:id', comentariosController.remove);

module.exports = router;
