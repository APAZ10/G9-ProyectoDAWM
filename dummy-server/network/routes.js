const cancha = require('../components/cancha/network');

const routes = function (server) {
    server.use('/cancha', cancha);
}

module.exports = routes;