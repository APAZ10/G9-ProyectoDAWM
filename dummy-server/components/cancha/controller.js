const store = require('./store');

function getCanchas() {
    return new Promise(async (resolve, reject) => {
        const canchas = await store.list()
        resolve(canchas)
    })
}

function addCancha(cancha) {
    return new Promise(async (resolve, reject) => {
        if (!cancha) {
            console.error('[message controller] No hay cancha')
            return reject('Los datos son incorrectos')
        }
        const added = await store.add(cancha)
        resolve(added)
    })
}

function updateCancha(id, cancha) {
    return new Promise((resolve, reject) => {
        if (!id || !cancha) {
            reject('Invalid data');
        }
        const result = store.update(id, cancha);
        resolve(result);
    });
}

function deleteCancha(id) {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('ID inválido');
        }
        const eliminado = await store.delete(id)
        resolve(eliminado)
    });
}

module.exports = {
    getCanchas: getCanchas,
    addCancha: addCancha,
    updateCancha: updateCancha,
    deleteCancha: deleteCancha,
}