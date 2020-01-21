module.exports = (sequelize, DataTypes) => {

    const Model = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        eaten: DataTypes.BOOLEAN


    })

    return Model;

}