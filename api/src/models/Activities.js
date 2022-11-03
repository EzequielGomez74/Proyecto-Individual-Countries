const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo

// Actividad Turística con las siguientes propiedades:
// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)

// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activities', {
    
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 1, max: 5 }
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
    },
    season: {
        type: DataTypes.ENUM('Spring', 'Summer', 'Autumn', 'Winter'),
        allowNull: false,
    },
  
      
  });
};
