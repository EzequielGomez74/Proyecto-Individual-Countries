const { DataTypes } = require('sequelize');
// // Exportamos una funcion que define el modelo
// // Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
   // defino el modelo
  sequelize.define('country', {
    
    id: {
      type: DataTypes.STRING(3), // 3 caracteres max
      primaryKey: true, // clave primaria
      allowNull: false, // no puede ser nulo
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.STRING,
    },
    population: {
      type: DataTypes.STRING,
    }
    },
    {
      timestamps: false,
      createdAt: 'creado',
      updatedAt: false
  });
};