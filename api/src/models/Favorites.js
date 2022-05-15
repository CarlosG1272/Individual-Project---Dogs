const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('favorites', {
        DogId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    {
        timestamps: false
      });
}

