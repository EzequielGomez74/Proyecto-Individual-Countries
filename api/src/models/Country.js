const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo

// [ ] País con las siguientes propiedades:
// ID (Código de 3 letras) *
// Nombre *
// Imagen de la bandera *
// Continente *
// Capital *
// Subregión
// Área
// Población


// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,

    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    flag: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    continent: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    capital: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.TEXT, 
    },
    extension: {
      type: DataTypes.INTEGER,
    },
    population: { 
      type: DataTypes.INTEGER,
    },
    maps: {
      type: DataTypes.TEXT,
    },
  });
};
