'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cuentas = [
      {
        "nombre": "xpgarcia",
        "clave": "xpgarcia",
        "correo": "xpgarcia@espol.edu.ec",
        "tipo": "administrador",
        "personas_id": 1
      },
      {
        "nombre": "garciaxa",
        "clave": "garciaxa",
        "correo": "garciaxa@espol.edu.ec",
        "tipo": "usuario",
        "personas_id": 2
      },
      {
        "nombre": "mrcheems",
        "clave": "mrcheems",
        "correo": "mrcheems@espol.edu.ec",
        "tipo": "usuario",
        "personas_id": 3
      },
      {
        "nombre": "tester",
        "clave": "tester",
        "correo": "tester@espol.edu.ec",
        "tipo": "administrador",
        "personas_id": 4
      }
    ];
    for (let cuenta of cuentas) {
      await queryInterface.bulkInsert('Cuentas', [{
        nombre: cuenta.nombre,
        clave: cuenta.clave,
        correo: cuenta.correo,
        tipo: cuenta.tipo,
        personas_id: cuenta.personas_id
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
