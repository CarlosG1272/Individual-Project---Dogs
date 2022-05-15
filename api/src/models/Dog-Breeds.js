const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, // El valor se asignarà de forma automática con un identificador universal de la versión 4.
    },
    name: {
      type: DataTypes.STRING, 
      allowNull: false
    }, 
    height_min: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    height_max: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
    , 
    weight_min: {
      type: DataTypes.INTEGER,
      allowNull: false 
    }
    ,
    weight_max: {
      type: DataTypes.FLOAT,
      allowNull: false 
    },
    min_life: {
      type: DataTypes.INTEGER, 
      
    }, 
    max_life: {
      type: DataTypes.INTEGER,
    }
  }, 
  {
    timestamps: false
  }
    );
};




