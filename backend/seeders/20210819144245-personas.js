'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const personas = [
      {
        "nombre": "Xavier García",
        "cedula": "0923040877",
        "telefono": "0992859362"
      },
      {
        "nombre": "Patricio Baño",
        "cedula": "0923040885",
        "telefono": "0992849062"
      },
      {
        "nombre": "José Delgado",
        "cedula": "0923195677",
        "telefono": "0989569362"
      },
      {
        "nombre": "Testing Tester",
        "cedula": "0982450877",
        "telefono": "0992851236"
      }
    ];
    for (let persona of personas) {
      await queryInterface.bulkInsert('Personas', [{
        nombre: persona.nombre,
        cedula: persona.cedula,
        telefono: persona.telefono
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
