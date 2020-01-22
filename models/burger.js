var sequelize = require("sequelize")

module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("burger", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    });
    return Burger;
};
  // id int NOT NULL AUTO_INCREMENT,
	// burger_name varchar(255) NOT NULL,
	// devoured BOOLEAN DEFAULT false,
  // PRIMARY KEY (id)
  

