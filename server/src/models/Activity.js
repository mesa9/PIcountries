const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    ID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false

    },
    dificultad: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5,
        isNumeric: true,
        msg: "calificación del 1 al 5"
      },
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 24,
        isNumeric: true,
        msg: "Debes ingresar la duración en el horario de 24 horas"
      }
    },
    temporada: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
  },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
};