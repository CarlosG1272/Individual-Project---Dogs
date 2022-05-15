const {DataTypes} = require("sequelize"); 

module.exports = (sequelize) => {
    sequelize.define("temperaments", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4, // El valor se asignarà de forma automática con un identificador universal de la versión 4.
            primaryKey: true
        }, 
        name: {
          type: DataTypes.STRING,
          allowNull: false
        }
      }, 
        {
          timestamps: false
        }
      )
}