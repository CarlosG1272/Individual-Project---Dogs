const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('favorites', {
        DogId: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false
      });
}

