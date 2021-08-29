var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var comentariosSchema = new Schema({
	'idCuenta' : String,
	'idCancha' : String,
	'idComentario' : String,
	'fecha' : String,
	'mensaje' : String
});

module.exports = mongoose.model('comentarios', comentariosSchema);
