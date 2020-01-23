module.exports = (sequelize, DataTypes) => {

    const Model = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN,
        


    })

    return Model;

}