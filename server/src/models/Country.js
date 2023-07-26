const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      defaultvalue: DataTypes.STRING(3),
    },
    flag: {
      type: DataTypes.STRING,
      isUrl: true,

    },
    continent: {
      type: DataTypes.STRING(10),
    },
    capital: {
      type: DataTypes.STRING(50),
    },
    area: {
      type: DataTypes.STRING,
      isNumeric: true,
      isDecimal: true,
    },
    subregion: {
      type: DataTypes.STRING(60),
      isAlpha: true,
    },
    population: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
  );
};

