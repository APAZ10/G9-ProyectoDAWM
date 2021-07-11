const data = require('./data.json');
const fs = require('fs');
const { resolve } = require('path');

const pathDir = './components/cancha/data.json'

function getCanchas() {
    return new Promise((resolve, reject) => {
        fs.readFile(pathDir, 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err)
            } else {
                var obj = {
                    canchas: []
                 }
                obj = JSON.parse(data)
                resolve(obj.canchas)
            }
        })
    })
}

function addCancha(cancha) {
    return new Promise((resolve, reject) => {
        fs.readFile(pathDir, 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err)
            } else {
                var obj = {
                    canchas: []
                 }
                obj = JSON.parse(data)
                obj.canchas.push(cancha)
                json = JSON.stringify(obj)
                fs.writeFile(pathDir, json, 'utf8', function(err){
                    if(err) throw err;
                })
                resolve(cancha)
            }
        })
    })
}

function updateCancha(id, cancha) {

}

function deleteCancha(id) {
    return new Promise((resolve, reject) => {
        fs.readFile(pathDir, 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err)
            } else {
                var obj = {
                    canchas: []
                 }
                obj = JSON.parse(data)
                for(let i = 0; i < obj.canchas.length; i++) {
                    if (obj.canchas[i].id === id) {
                        let eliminado = obj.canchas[i];
                        obj.canchas.splice(i, 1)
                        json = JSON.stringify(obj)
                        fs.writeFile(pathDir, json, 'utf8', function(err){
                            if(err) throw err;
                        })
                        resolve(eliminado)
                    }
                }
            }
        })
    })
}

module.exports = {
    list: getCanchas,
    add: addCancha,
    update: updateCancha,
    delete: deleteCancha,
}